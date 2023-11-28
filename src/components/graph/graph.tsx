import * as React from 'react';
import * as d3 from 'd3';
import { d3Types } from "./types";
import Links from "./links";
import Nodes from "./nodes";
import Labels from "./labels";

interface Props {
  width: number;
  height: number;
  graph: d3Types.d3Graph;
}

export default class Graph extends React.Component<Props, {}> {
  simulation: any;

  constructor(props: Props) {
    super(props);
    const w = props.width
    const h = props.height

    this.simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id((d: any) => {
        return d.id;
      }))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(this.props.width / 2, this.props.height / 2))
      .nodes(this.props.graph.nodes as d3.SimulationNodeDatum[])
    function validate(x: number, a: number, b: number) {
      if (x < a) x = a;
      if (x > b) x = b;
      return x;
    }  

    this.props.graph.nodes.forEach(function(d:any) { 
      d.x = validate(d.x, 0, w);
      d.y = validate(d.y, 0, h);
    })
    
    this.simulation.force("link").links(this.props.graph.links);
  }

  update(new_nodes: d3Types.d3Node[]) {
    //updates the nods
    this.simulation.nodes(new_nodes as d3.SimulationNodeDatum[]);

    //updates the links
    this.simulation.force("link").links(this.props.graph.links);

    this.simulation.alphaTarget(0.3).restart()

    return (<svg className="border border-black"
        width={this.props.width} height={this.props.height}>
        <g>
            <Links links={this.props.graph.links} />
            <Nodes data={{width: this.props.width, height: this.props.height, nodes: this.props.graph.nodes}} simulation={this.simulation} />
            <Labels nodes={this.props.graph.nodes} />
        </g>
    </svg>)
  }

  tick() {
    const simulation = this.simulation
    const node = d3.selectAll(".node");
    const link = d3.selectAll(".link");
    const label = d3.selectAll(".label");
    function validate(x: number, a: number, b: number) {
      if (x < a) {
        
        x = a;
      }
      if (x > b) {
        x = b;
      }
      return x;
    } 

    link
    .attr("x1", function (d: any) {
      return d.source.x;
    })
    .attr("y1", function (d: any) {
      return d.source.y;
    })
    .attr("x2", function (d: any) {
      return d.target.x;
    })
    .attr("y2", function (d: any) {
      return d.target.y;
    });

    //prevents escaping from the prison
    node
    .attr("cx", function(d: any) { 
      const xVal = validate(d.x, 0, 600)

      //to update so that labels know
      d.x = xVal
      return xVal;
    })
    .attr("cy", function(d: any) { 
      const yVal = validate(d.y, 0, 600)
      d.y = yVal
      return yVal;
    });

    label
      .attr("x", function (d: any) {
        return d.x + 5;
      })
      .attr("y", function (d: any) {
        return d.y + 5;
      });
}

  componentDidMount() {
    this.simulation.nodes(this.props.graph.nodes).on("tick", this.tick);

    const { width, height } = this.props;
    let zoom = d3.zoom<SVGSVGElement, unknown>().on('zoom', handleZoom).scaleExtent([1,5]).translateExtent([[0,0],[width,height]])
    
    function handleZoom(e: { transform: string | number | boolean | readonly (string | number)[] | d3.ValueFn<d3.BaseType, unknown, string | number | boolean | readonly (string | number)[] | null> | null; }) {
        d3.select('svg g').attr('transform', e.transform)
    }

    d3.select<SVGSVGElement, unknown>('svg').call(zoom)
  }


  render() {
    const { width, height, graph } = this.props;

    return this.update(graph.nodes);
  }
}
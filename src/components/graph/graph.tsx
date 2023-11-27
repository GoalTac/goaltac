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
    this.simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id((d: any) => {
        return d.id;
      }))
      .force("charge", d3.forceManyBody().strength(-100))
      .force("center", d3.forceCenter(this.props.width / 2, this.props.height / 2))
      .nodes(this.props.graph.nodes);

    this.simulation.force("link").links(this.props.graph.links);
  }

  componentDidMount() {
    const node = d3.selectAll(".node");
    const link = d3.selectAll(".link");
    const label = d3.selectAll(".label");

    this.simulation.nodes(this.props.graph.nodes).on("tick", ticked);

    const { width, height } = this.props;
    let zoom = d3.zoom().on('zoom', handleZoom).scaleExtent([1,5]).translateExtent([[0,0],[width,height]])
    
    function handleZoom(e: { transform: string | number | boolean | readonly (string | number)[] | d3.ValueFn<d3.BaseType, unknown, string | number | boolean | readonly (string | number)[] | null> | null; }) {
        d3.select('svg g').attr('transform', e.transform)
    }

    d3.select('svg').call(zoom)

    function ticked() {
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

      node
        .attr("cx", function (d: any) {
          return d.x;
        })
        .attr("cy", function (d: any) {
          return d.y;
        });

      label
        .attr("x", function (d: any) {
          return d.x + 5;
        })
        .attr("y", function (d: any) {
          return d.y + 5;
        });
    }
  }

  render() {
    const { width, height, graph } = this.props;
    return (
      <svg className="container border border-black"
        width={width} height={height}>
        <g>
            <Links links={graph.links} />
            <Nodes nodes={graph.nodes} simulation={this.simulation} />
            <Labels nodes={graph.nodes} />
        </g>
        
      </svg>
    );
  }
}
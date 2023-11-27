import * as React from "react";
import * as d3 from "d3";
import { d3Types } from "./types";

class Node extends React.Component<{ node: d3Types.d3Node, color: string }, {}> {
  ref!: SVGCircleElement;

  componentDidMount() {
    d3.select(this.ref).data([this.props.node]);
  }

  render() {
    return (
      <circle className="node cursor-pointer" r={6} fill={this.props.color}
        ref={(ref: SVGCircleElement) => this.ref = ref}>
        <title>{this.props.node.id}</title>
      </circle>
    );
  }
}

export default class Nodes extends React.Component<{ nodes: d3Types.d3Node[], simulation: any }, {}> {
  componentDidMount() {
    const simulation = this.props.simulation;
    d3.selectAll<SVGSVGElement, unknown>(".node").call(drag(simulation));

    function drag(simulation: { alphaTarget: (arg0: number) => { (): any; new(): any; restart: { (): void; new(): any; }; }; }) {    
        function dragstarted(event: { active: any; subject: { fx: any; x: any; fy: any; y: any; }; }) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        }

        function dragged(event: { subject: { fx: any; fy: any; }; x: any; y: any; }) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        }

        function dragended(event: { active: any; subject: { fx: null; fy: null; }; }) {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
        }

        return d3.drag<SVGSVGElement, unknown>()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
    }
    
  }

  render() {
    const color = d3.scaleOrdinal(d3.schemeAccent);
    const nodes = this.props.nodes.map((node: d3Types.d3Node, index: number) => {
      return <Node key={index} node={node} color={color(node.group.toString())} />;
    });

    return (
      <g className="nodes">
        {nodes}
      </g>
    );
  }
}
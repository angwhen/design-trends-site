import { Graph } from "react-d3-graph";
import React, { Component } from 'react';
import { makeData, makeCooccurData , makeRelatedAdjs, makeRelatedCities } from "./FashionTermScoresUtils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class FashionTermsGraph extends Component {
  constructor(props) {
    super(props)
    this.state = { data: {
nodes: [{id:"nankeen",size:50},{id:"duvetyne",size:50},{id:"scooter",size:135},{id:"aba",size:151},{id:"mother of pearl",size:50},{id:"circle skirt",size:50},{id:"pedal pushers",size:50},{id:"panne",size:61},{id:"jumper",size:308},{id:"organza",size:88},{id:"catsuit",size:50},{id:"shantung",size:190},{id:"low waist",size:50},{id:"marceline",size:50},{id:"moleskin",size:50},{id:"tapestry",size:190},{id:"reversible",size:56},{id:"pencil skirt",size:54},{id:"waistcoat",size:97},{id:"sash",size:145},{id:"surplice",size:50},{id:"serge",size:255},{id:"pantyhose",size:73},{id:"paisley",size:181},{id:"bow tie",size:119},{id:"astrakhan",size:54},{id:"scarf",size:254},{id:"divided skirt",size:50},{id:"elastique",size:50},{id:"armlet",size:50},{id:"nonwoven fabric",size:50},{id:"jersey",size:2476},{id:"bandana",size:55},{id:"boots",size:477},{id:"bathrobe",size:105},{id:"colorfast",size:50},{id:"yak",size:64},{id:"chesterfield coat",size:50},{id:"macintosh",size:175},{id:"polypropylene",size:63},{id:"kurta",size:50},{id:"mull",size:83},{id:"baft",size:50},{id:"stole",size:292},{id:"dorian",size:113},{id:"hosiery",size:348},{id:"cupro",size:50},{id:"zephyr",size:97},{id:"elastane",size:50},{id:"suspenders",size:127}],
links:[{ source: "nankeen",target: "nankeen" },{ source: "duvetyne",target: "duvetyne" },{ source: "scooter",target: "scooter" },{ source: "scooter",target: "jersey" },{ source: "scooter",target: "boots" },{ source: "scooter",target: "macintosh" },{ source: "aba",target: "aba" },{ source: "aba",target: "sash" },{ source: "aba",target: "scarf" },{ source: "aba",target: "jersey" },{ source: "aba",target: "boots" },{ source: "mother of pearl",target: "mother of pearl" },{ source: "circle skirt",target: "circle skirt" },{ source: "circle skirt",target: "paisley" },{ source: "circle skirt",target: "boots" },{ source: "pedal pushers",target: "pedal pushers" },{ source: "pedal pushers",target: "jersey" },{ source: "panne",target: "panne" },{ source: "panne",target: "sash" },{ source: "panne",target: "paisley" },{ source: "panne",target: "jersey" },{ source: "panne",target: "hosiery" },{ source: "jumper",target: "jumper" },{ source: "jumper",target: "shantung" },{ source: "jumper",target: "waistcoat" },{ source: "jumper",target: "sash" },{ source: "jumper",target: "serge" },{ source: "jumper",target: "paisley" },{ source: "jumper",target: "scarf" },{ source: "jumper",target: "jersey" },{ source: "jumper",target: "boots" },{ source: "jumper",target: "macintosh" },{ source: "jumper",target: "suspenders" },{ source: "organza",target: "organza" },{ source: "organza",target: "shantung" },{ source: "organza",target: "waistcoat" },{ source: "organza",target: "jersey" },{ source: "organza",target: "boots" },{ source: "catsuit",target: "catsuit" },{ source: "shantung",target: "shantung" },{ source: "shantung",target: "scarf" },{ source: "shantung",target: "jersey" },{ source: "shantung",target: "stole" },{ source: "low waist",target: "low waist" },{ source: "marceline",target: "marceline" },{ source: "marceline",target: "jersey" },{ source: "moleskin",target: "moleskin" },{ source: "moleskin",target: "jersey" },{ source: "moleskin",target: "boots" },{ source: "tapestry",target: "tapestry" },{ source: "tapestry",target: "sash" },{ source: "tapestry",target: "serge" },{ source: "tapestry",target: "paisley" },{ source: "tapestry",target: "scarf" },{ source: "tapestry",target: "jersey" },{ source: "tapestry",target: "boots" },{ source: "tapestry",target: "yak" },{ source: "tapestry",target: "stole" },{ source: "reversible",target: "reversible" },{ source: "reversible",target: "serge" },{ source: "reversible",target: "jersey" },{ source: "reversible",target: "hosiery" },{ source: "pencil skirt",target: "pencil skirt" },{ source: "pencil skirt",target: "boots" },{ source: "waistcoat",target: "waistcoat" },{ source: "waistcoat",target: "sash" },{ source: "waistcoat",target: "boots" },{ source: "waistcoat",target: "stole" },{ source: "sash",target: "sash" },{ source: "sash",target: "scarf" },{ source: "sash",target: "jersey" },{ source: "sash",target: "boots" },{ source: "sash",target: "bathrobe" },{ source: "sash",target: "stole" },{ source: "surplice",target: "surplice" },{ source: "surplice",target: "jersey" },{ source: "serge",target: "serge" },{ source: "serge",target: "bow tie" },{ source: "serge",target: "astrakhan" },{ source: "serge",target: "scarf" },{ source: "serge",target: "elastique" },{ source: "serge",target: "jersey" },{ source: "serge",target: "bandana" },{ source: "serge",target: "boots" },{ source: "serge",target: "stole" },{ source: "serge",target: "hosiery" },{ source: "pantyhose",target: "pantyhose" },{ source: "pantyhose",target: "scarf" },{ source: "pantyhose",target: "jersey" },{ source: "pantyhose",target: "boots" },{ source: "pantyhose",target: "hosiery" },{ source: "pantyhose",target: "elastane" },{ source: "paisley",target: "paisley" },{ source: "paisley",target: "bow tie" },{ source: "paisley",target: "scarf" },{ source: "paisley",target: "jersey" },{ source: "paisley",target: "bandana" },{ source: "paisley",target: "boots" },{ source: "paisley",target: "bathrobe" },{ source: "paisley",target: "suspenders" },{ source: "bow tie",target: "bow tie" },{ source: "bow tie",target: "scarf" },{ source: "bow tie",target: "jersey" },{ source: "bow tie",target: "boots" },{ source: "bow tie",target: "suspenders" },{ source: "astrakhan",target: "astrakhan" },{ source: "astrakhan",target: "scarf" },{ source: "astrakhan",target: "jersey" },{ source: "astrakhan",target: "boots" },{ source: "scarf",target: "scarf" },{ source: "scarf",target: "jersey" },{ source: "scarf",target: "boots" },{ source: "scarf",target: "stole" },{ source: "scarf",target: "hosiery" },{ source: "scarf",target: "suspenders" },{ source: "divided skirt",target: "divided skirt" },{ source: "elastique",target: "elastique" },{ source: "armlet",target: "armlet" },{ source: "nonwoven fabric",target: "nonwoven fabric" },{ source: "jersey",target: "jersey" },{ source: "jersey",target: "bandana" },{ source: "jersey",target: "boots" },{ source: "jersey",target: "bathrobe" },{ source: "jersey",target: "yak" },{ source: "jersey",target: "macintosh" },{ source: "jersey",target: "polypropylene" },{ source: "jersey",target: "mull" },{ source: "jersey",target: "stole" },{ source: "jersey",target: "dorian" },{ source: "jersey",target: "hosiery" },{ source: "jersey",target: "zephyr" },{ source: "jersey",target: "suspenders" },{ source: "bandana",target: "bandana" },{ source: "bandana",target: "boots" },{ source: "boots",target: "boots" },{ source: "boots",target: "bathrobe" },{ source: "boots",target: "yak" },{ source: "boots",target: "mull" },{ source: "boots",target: "stole" },{ source: "boots",target: "hosiery" },{ source: "boots",target: "zephyr" },{ source: "boots",target: "suspenders" },{ source: "bathrobe",target: "bathrobe" },{ source: "colorfast",target: "colorfast" },{ source: "colorfast",target: "hosiery" },{ source: "yak",target: "yak" },{ source: "yak",target: "stole" },{ source: "chesterfield coat",target: "chesterfield coat" },{ source: "macintosh",target: "macintosh" },{ source: "macintosh",target: "polypropylene" },{ source: "macintosh",target: "stole" },{ source: "polypropylene",target: "polypropylene" },{ source: "kurta",target: "kurta" },{ source: "mull",target: "mull" },{ source: "baft",target: "baft" },{ source: "stole",target: "stole" },{ source: "dorian",target: "dorian" },{ source: "hosiery",target: "hosiery" },{ source: "hosiery",target: "suspenders" },{ source: "cupro",target: "cupro" },{ source: "zephyr",target: "zephyr" },{ source: "elastane",target: "elastane" },{ source: "suspenders",target: "suspenders" }],
},
scoresData: makeData(),
cooccurentTerms: makeCooccurData(),
relatedAdjs: makeRelatedAdjs(),
relatedCities: makeRelatedCities(),
currentChartNum: 1}
  }

  toggleChart = () => {
    this.setState(prevState => ({
      currentChartNum: (prevState.currentChartNum+1)%2
    }));
  }

  createCorrectGraph = () => {
    let code = []
    if (this.state.currentChartNum == 0){
      // the graph configuration, you only need to pass down properties
      // that you want to override, otherwise default ones will be used
      const myConfig = {
          nodeHighlightBehavior: true,
          width: window.innerWidth*0.99,
          height: 900,
          node: {
              color: "lightgreen",
              fontSize: 16,
              highlightStrokeColor: "blue",
              opacity: 0.5,
          },
          d3: {
            gravity: -200,
            linkLength: 400,
            linkStrength: 0.8,
          },
          link: {
              highlightColor: "lightblue",
              opacity: 0.4,
          },
      };
      code.push(
        <Graph
            id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
            data={this.state.data}
            config={myConfig}

        />
      );
    }// end if state 0
    if (this.state.currentChartNum == 1){
      code.push(
      <div>
        <ReactTable
          data={this.state.scoresData}
          columns={[
            {
              Header: "Fashion Term",
              columns: [
                {
                  Header: "Term",
                  accessor: "term"
                }
              ]
            },
            {
              Header: "Fashionabilty Scores",
              columns: [
                {
                  Header: "Deg Centrality",
                  accessor: "score1"
                },

                {
                  Header: "Eigenvec Centrality",
                  accessor: "score3"
                }
              ]
            }
          ]}
          defaultSorted={[
            {
              id: "score1",
              desc: true
            }
          ]}
          defaultPageSize={500}
          SubComponent={row => {
            return (
              <div style={{ padding: "20px" }}>
                <p> Top cooccurentTerms: [{this.state.cooccurentTerms[row.original.term]?this.state.cooccurentTerms[row.original.term].map((item, i) => (i ? ', ' : '') +item):''}]</p>

                <p>Adjectives used to describe:  [{this.state.relatedAdjs[row.original.term]?this.state.relatedAdjs[row.original.term].map((item, i) => (i ? ', ' : '') +item):''}] </p>
                <p>Top cities:  [{this.state.relatedCities[row.original.term]?this.state.relatedCities[row.original.term].map((item, i) => (i ? ', ' : '') +item):''}] </p>
              </div>
            );
          }}
        />
        <br />

      </div>
    )
  }//end if staet 1
    return code;
  }
  render() {







return (
  <div>
  <button onClick={this.toggleChart}> Toggle Chart </button>
{this.createCorrectGraph()}
</div>

);
}
}
export default FashionTermsGraph;

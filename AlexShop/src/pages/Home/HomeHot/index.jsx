import React from "react"
import api from "../../../api"
import HomeHotView from "./HomeHotView"

export default class HomeHot extends React.Component {

    constructor(){
        super();
        this.state = {
            homehot1:[],
            homehot2:[]
        }
    }

    componentDidMount() {
        const figure = this.props.figure || localStorage.getItem("figure")|| 'Doll'
        api.homehot.homehot1Data(figure)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    homehot1:data
                })
            })

        api.homehot.homehot2Data(figure)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    homehot2:data
                })
            })
    }

    render() {
        const { homehot1,homehot2 } = this.state;
        return (
            <div>
                
                {
                    homehot1.length > 0?
                    <HomeHotView data={ homehot1 } title={ '人气手办' }/>
                    : <div>正在请求数据</div>
                }

                {
                    homehot2.length > 0?
                    <HomeHotView data={ homehot2 } title={ '热销手办' }/>
                    : <div>正在请求数据</div>
                }

            </div>
        )
    }
}
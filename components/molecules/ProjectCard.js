import React from 'react';
import Link from "next/link";
import Typography from "../../components/atoms/Typography";
import Tag from "./Tag";
import { theme } from "../../theme/globalStyle";
import styled from "styled-components";

const StyledProjectCard = styled.div`
    *{
        cursor:pointer;
    }
    @media screen and (max-width: ${theme.maxBreakPoints.medium}){
        margin: ${theme.baseUnit4} auto !important;
    }
`

const Placeholder = styled.div`
    height: 250px;
    width: auto;
    background: red;
`

class ProjectCard extends React.Component{
    constructor(){
        super();
        this.state = { isLoading: true }
    }

    componentDidMount() {
        this.setState({isLoading: false})
    }

    renderImage(image){
        let imageElement;

        if(this.state.isLoading){
            imageElement = <Placeholder/>
        } else{
            imageElement = <img src={image}></img>
        }

        return imageElement;
    }

    getRandomMargin(){
        let margin = (Math.floor(Math.random() * 100))
        let is_positive = 1;
        let _temp = Math.random();
        if(_temp > 0.5){ is_positive = -1}
        return (margin*is_positive).toString() + 'px'
    }

    render(){
        let margin = {
            marginTop:  this.getRandomMargin()
        }
        return(
            <Link href="/work/[id]" as={`/work/${this.props.id}`}>            
                <StyledProjectCard>
                    {this.renderImage(this.props.img)}
                    <Typography mb="0" type="body" dark bold>{this.props.name}</Typography>
                    <Typography type="body" dark>{this.props.tagline}</Typography>
                    <Tag>{this.props.tag}</Tag>
                </StyledProjectCard>
            </Link>
        )
    }
}

export default ProjectCard;
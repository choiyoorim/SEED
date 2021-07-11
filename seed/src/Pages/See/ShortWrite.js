import React from 'react';
import {Link} from 'react-router-dom';
import Navi from '../../Components/Navi'
import Layout from '../../Components/Layout';
import Button from "../../Components/Button";
import BasicButtonGroup from "../../Components/SelectButton";
import './ShortWrite.css'
import Write from '../See/Write';

class ShortWrite extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'리뷰 작성 시 광고 및 욕설, 비속어나 타인을 비방하는 문구를 사용하시면 삭제될 수 있습니다.'
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({value:event.target.value});
    }


    render(){
        return(
            <>
                <Navi></Navi>
                <div className="Write_main">
                    <input className="movie-search" type='text' placeholder='Search'/>
                    <div className="select-button-wrap">
                        <BasicButtonGroup number="-1"></BasicButtonGroup>
                    </div>
                    <div className="form-wrap">
                        <p className="inst">“ ........”에 대한 한 줄 리뷰를 작성하세요.</p>
                        <textarea value={this.state.value} onChange={this.handleChange}/>
                        <div className="button-wrap">
                            <Button className="submit-button" size ="md">저장</Button>
                        </div>
                        <input className="keyword-input" type='text' placeholder='#'/>
                        <input className="check-box" type="checkbox" value="spoiler"></input><a className="check-inst">스포일러</a>
                    </div>
                </div>
            </>
        )
    }
}

export default ShortWrite;
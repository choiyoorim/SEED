import React from 'react';
import './Write.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Navi from '../../Components/Navi'
import Layout from '../../Components/Layout';
import Button from "../../Components/Button"
import {Link} from 'react-router-dom';
import BasicButtonGroup from "../../Components/SelectButton";
import talkIcon from '../../Components/Logo/talking-icon.png';

function Write(){
        return(
            <>
                <Navi></Navi>
                <div className="Write_main">
                    <input className="movie-search" type='text' placeholder='Search'/>
                    <div className="select-button-wrapping">
                        <BasicButtonGroup number="1"></BasicButtonGroup>
                    </div>
                    <div className="form-wrap">
                        <input className="title-input" type='text' placeholder='제목'/>
                        <CKEditor
                            editor={ ClassicEditor }
                            data="<p>리뷰 작성 시 광고 및 욕설, 비속어나 타인을 비방하는 문구를 사용하시면 삭제될 수 있습니다.</p>"
                            onReady={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                console.log( { event, editor, data } );
                            } }
                            onBlur={ ( event, editor ) => {
                                console.log( 'Blur.', editor );
                            } }
                            onFocus={ ( event, editor ) => {
                                console.log( 'Focus.', editor );
                            } }
                        />
                        <div className="setting">
                            <input className="keyword-input" type='text' placeholder='#'/>
                            <div className="check">
                                <input className="check-box" type="checkbox" value="spoiler"></input>
                                <a className="check-inst">스포일러</a>
                            </div>
                            <Button className="submit-button" size="sm">저장</Button>
                        </div>
                    </div>
                </div>
                
                <img className="talk-icon" src={talkIcon} width="30px" height="30px" />
            </>
        );
}

export default Write;
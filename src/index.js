import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './component/board';
import PartBoard from './component/part-board';
import SectionBoard from './component/section-board';
import { ISSUE_BOARD, REPO, WEEK_1 } from '../src/utils/SectionContent'
import './style/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Board>
            <PartBoard title="General Infomation">
                <SectionBoard title="Tasks">
                    <ISSUE_BOARD/>
                </SectionBoard>
                <SectionBoard title="Repository">
                    <REPO/>
                </SectionBoard>
            </PartBoard>
            <PartBoard title="Weekly">
                <SectionBoard title="Week 1">
                    <WEEK_1/>
                </SectionBoard>
            </PartBoard>
        </Board>
    </>
);
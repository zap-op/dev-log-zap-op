import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './component/board';
import PartBoard from './component/part-board';
import SectionBoard from './component/section-board';
import { DOC, ISSUE_BOARD, REPO, WEEK_1, WEEK_2, WEEK_3, WEEK_4, WEEK_5 } from '../src/utils/SectionContent'
import './style/style.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Board>
            <PartBoard title="General Infomation">
                <SectionBoard title="Tasks">
                    <ISSUE_BOARD />
                </SectionBoard>
                <SectionBoard title="Repository">
                    <REPO />
                </SectionBoard>
                <SectionBoard title="Document">
                    <DOC />
                </SectionBoard>
            </PartBoard>
            <PartBoard title="Weekly">
                <SectionBoard title="Week 1" startDate="19-07-2022" endDate="26-07-2022">
                    <WEEK_1 />
                </SectionBoard>
                <SectionBoard title="Week 2" startDate="27-07-2022" endDate="01-08-2022">
                    <WEEK_2 />
                </SectionBoard>
                <SectionBoard title="Week 3" startDate="02-08-2022" endDate="08-08-2022">
                    <WEEK_3 />
                </SectionBoard>
                <SectionBoard title="Week 4" startDate="09-08-2022" endDate="15-08-2022">
                    <WEEK_4 />
                </SectionBoard>
                <SectionBoard title="Week 5" startDate="16-08-2022" endDate="22-08-2022">
                    <WEEK_5 />
                </SectionBoard>
            </PartBoard>
        </Board>
    </>
);
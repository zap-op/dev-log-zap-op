import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './component/board';
import PartBoard from './component/part-board';
import SectionBoard from './component/section-board';
import * as SectionContent from '../src/utils/SectionContent';
import './style/style.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Board>
            <PartBoard title="General Infomation">
                <SectionBoard title="Tasks">
                    <SectionContent.ISSUE_BOARD />
                </SectionBoard>
                <SectionBoard title="Repository">
                    <SectionContent.REPO />
                </SectionBoard>
                <SectionBoard title="Document">
                    <SectionContent.DOC />
                </SectionBoard>
            </PartBoard>
            <PartBoard title="Weekly">
                <SectionBoard title="Week 1" startDate="19-07-2022" endDate="26-07-2022">
                    <SectionContent.WEEK_1 />
                </SectionBoard>
                <SectionBoard title="Week 2" startDate="27-07-2022" endDate="01-08-2022">
                    <SectionContent.WEEK_2 />
                </SectionBoard>
                <SectionBoard title="Week 3" startDate="02-08-2022" endDate="08-08-2022">
                    <SectionContent.WEEK_3 />
                </SectionBoard>
                <SectionBoard title="Week 4" startDate="09-08-2022" endDate="15-08-2022">
                    <SectionContent.WEEK_4 />
                </SectionBoard>
                <SectionBoard title="Week 5" startDate="16-08-2022" endDate="22-08-2022">
                    <SectionContent.WEEK_5 />
                </SectionBoard>
                <SectionBoard title="Week 6" startDate="23-08-2022" endDate="29-08-2022">
                    <SectionContent.WEEK_6 />
                </SectionBoard>
                <SectionBoard title="Week 7" startDate="30-08-2022" endDate="05-09-2022">
                    <SectionContent.WEEK_7 />
                </SectionBoard>
                <SectionBoard title="Week 8" startDate="06-09-2022" endDate="13-09-2022">
                    <SectionContent.WEEK_8 />
                </SectionBoard>
                <SectionBoard title="Week 9" startDate="14-09-2022" endDate="21-09-2022">
                    <SectionContent.WEEK_9 />
                </SectionBoard>
                <SectionBoard title="Week 10" startDate="22-09-2022" endDate="26-09-2022">
                    <SectionContent.WEEK_10 />
                </SectionBoard>
                <SectionBoard title="Week 11" startDate="26-09-2022" endDate="03-10-2022">
                    <SectionContent.WEEK_11 />
                </SectionBoard>
                <SectionBoard title="Week 12" startDate="03-10-2022" endDate="10-10-2022">
                    <SectionContent.WEEK_12 />
                </SectionBoard>
            </PartBoard>
        </Board>
    </>
);
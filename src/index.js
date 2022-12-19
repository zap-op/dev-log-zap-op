import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './component/board';
import PartBoard from './component/part-board';
import SectionBoard from './component/section-board';
import * as SectionContent from '../src/utils/SectionContent';
import './style/style.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="app-board-container">
        <Board>
            <PartBoard title="General Infomation">
                <SectionBoard title="Tasks">
                    <SectionContent.ISSUE_BOARD />
                </SectionBoard>
                <SectionBoard title="Repository">
                    <SectionContent.REPO />
                </SectionBoard>
                <SectionBoard title="Tracking Pages">
                    <SectionBoard title="Product Document">
                        <SectionContent.PRODUCT_DOC />
                    </SectionBoard>
                    <SectionBoard title="Applied Thesis Document">
                        <SectionContent.THESIS_DOC />
                    </SectionBoard>
                    <SectionBoard title="Snapshot Document">
                        <SectionContent.SNAPSHOT_DOC />
                    </SectionBoard>
                </SectionBoard>
            </PartBoard>
            <PartBoard title="Weekly">
                <SectionBoard title="Week 22" startDate="12-12-2022" endDate="19-12-2022">
                    <SectionContent.WEEK_22 />
                </SectionBoard>
                <SectionBoard title="Week 21" startDate="05-12-2022" endDate="12-12-2022">
                    <SectionContent.WEEK_21 />
                </SectionBoard>
                <SectionBoard title="Week 20" startDate="28-11-2022" endDate="05-12-2022">
                    <SectionContent.WEEK_20 />
                </SectionBoard>
                <SectionBoard title="Week 19" startDate="21-11-2022" endDate="28-11-2022">
                    <SectionContent.WEEK_19 />
                </SectionBoard>
                <SectionBoard title="Week 18" startDate="14-11-2022" endDate="21-11-2022">
                    <SectionContent.WEEK_18 />
                </SectionBoard>
                <SectionBoard title="Week 17" startDate="07-11-2022" endDate="14-11-2022">
                    <SectionContent.WEEK_17 />
                </SectionBoard>
                <SectionBoard title="Week 16" startDate="31-10-2022" endDate="07-11-2022">
                    <SectionContent.WEEK_16 />
                </SectionBoard>
                <SectionBoard title="Week 15" startDate="25-10-2022" endDate="31-10-2022">
                    <SectionContent.WEEK_15 />
                </SectionBoard>
                <SectionBoard title="Week 14" startDate="18-10-2022" endDate="24-10-2022">
                    <SectionContent.WEEK_14 />
                </SectionBoard>
                <SectionBoard title="Week 13" startDate="11-10-2022" endDate="17-10-2022">
                    <SectionContent.WEEK_13 />
                </SectionBoard>
                <SectionBoard title="Week 12" startDate="03-10-2022" endDate="10-10-2022">
                    <SectionContent.WEEK_12 />
                </SectionBoard>
                <SectionBoard title="Week 11" startDate="26-09-2022" endDate="03-10-2022">
                    <SectionContent.WEEK_11 />
                </SectionBoard>
                <SectionBoard title="Week 10" startDate="22-09-2022" endDate="26-09-2022">
                    <SectionContent.WEEK_10 />
                </SectionBoard>
                <SectionBoard title="Week 9" startDate="14-09-2022" endDate="21-09-2022">
                    <SectionContent.WEEK_9 />
                </SectionBoard>
                <SectionBoard title="Week 8" startDate="06-09-2022" endDate="13-09-2022">
                    <SectionContent.WEEK_8 />
                </SectionBoard>
                <SectionBoard title="Week 7" startDate="30-08-2022" endDate="05-09-2022">
                    <SectionContent.WEEK_7 />
                </SectionBoard>
                <SectionBoard title="Week 6" startDate="23-08-2022" endDate="29-08-2022">
                    <SectionContent.WEEK_6 />
                </SectionBoard>
                <SectionBoard title="Week 5" startDate="16-08-2022" endDate="22-08-2022">
                    <SectionContent.WEEK_5 />
                </SectionBoard>
                <SectionBoard title="Week 4" startDate="09-08-2022" endDate="15-08-2022">
                    <SectionContent.WEEK_4 />
                </SectionBoard>
                <SectionBoard title="Week 3" startDate="02-08-2022" endDate="08-08-2022">
                    <SectionContent.WEEK_3 />
                </SectionBoard>
                <SectionBoard title="Week 2" startDate="27-07-2022" endDate="01-08-2022">
                    <SectionContent.WEEK_2 />
                </SectionBoard>
                <SectionBoard title="Week 1" startDate="19-07-2022" endDate="26-07-2022">
                    <SectionContent.WEEK_1 />
                </SectionBoard>
            </PartBoard>
        </Board>
    </div>
);
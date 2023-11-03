import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import type { Dayjs } from 'dayjs';
import dayLocaleData from 'dayjs/plugin/localeData';
import { Calendar, Col, Radio, Row, Select, Typography, theme, List} from 'antd';
import type { CalendarProps } from 'antd';
import "./Reminder.css";
import listItems from "../../services/reminderList";

export default function Reminder() {
    return (
        <>
            <body>
                <Header text="Reminder" />
                <div className="reminder">
                    <div className="reminder-container">
                        <div className="reminder-list">
                            <List className="reminder-list-item"
                                header={<div>Reminder List</div>}
                                bordered
                                dataSource={listItems}
                                renderItem={(item) => (
                                    <List.Item className="reminder-list-item-description">
                                        {item.description}
                                        <br />
                                        {item.date}
                                    </List.Item>
                                )}
                            />
                        </div>
                        <div className="reminder-item">
                            <button className="button-basket">Add Reminder</button>
                        </div>
                    </div>
                </div>
                <div className="calendar-container ">
                    <div className="calendar-item">
                        <RemindCalendar />
                    </div>
                </div>
                <Menu />
            </body>
        </>
    );
}

dayjs.extend(dayLocaleData);

const RemindCalendar : React.FC = () => {
    const { token } = theme.useToken();

    const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    const wrapperStyle: React.CSSProperties = {
        width: '75vw',
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };

    return (
        <div style={wrapperStyle}>
            <Calendar
                fullscreen={false}
                headerRender={({ value, type, onChange, onTypeChange }) => {
                    const start = 0;
                    const end = 12;
                    const monthOptions = [];

                    let current = value.clone();
                    const localeData = value.localeData();
                    const months = [];
                    for (let i = 0; i < 12; i++) {
                        current = current.month(i);
                        months.push(localeData.monthsShort(current));
                    }

                    for (let i = start; i < end; i++) {
                        monthOptions.push(
                            <Select.Option key={i} value={i} className="month-item">
                                {months[i]}
                            </Select.Option>,
                        );
                    }

                    const year = value.year();
                    const month = value.month();
                    const options = [];
                    for (let i = year - 10; i < year + 10; i += 1) {
                        options.push(
                            <Select.Option key={i} value={i} className="year-item">
                                {i}
                            </Select.Option>,
                        );
                    }
                    return (
                        <div style={{ padding: 8 }}>
                            <Typography.Title level={4}>PETS REMINDER</Typography.Title>
                            <Row gutter={8}>
                                <Col>
                                    <Radio.Group
                                        size="small"
                                        onChange={(e) => onTypeChange(e.target.value)}
                                        value={type}
                                    >
                                        <Radio.Button value="month">Month</Radio.Button>
                                        <Radio.Button value="year">Year</Radio.Button>
                                    </Radio.Group>
                                </Col>
                                <Col>
                                    <Select
                                        size="small"
                                        dropdownMatchSelectWidth={false}
                                        className="my-year-select"
                                        value={year}
                                        onChange={(newYear) => {
                                            const now = value.clone().year(newYear);
                                            onChange(now);
                                        }}
                                    >
                                        {options}
                                    </Select>
                                </Col>
                                <Col>
                                    <Select
                                        size="large"
                                        dropdownMatchSelectWidth={false}
                                        value={month}
                                        onChange={(newMonth) => {
                                            const now = value.clone().month(newMonth);
                                            onChange(now);
                                        }}
                                    >
                                        {monthOptions}
                                    </Select>
                                </Col>
                            </Row>
                        </div>
                    );
                }}
                onPanelChange={onPanelChange}
            />
        </div>
    );
};
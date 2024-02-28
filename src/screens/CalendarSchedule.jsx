// import react from "react";
// import "../App.css";
// import {
//   ScheduleComponent,
//   Day,
//   Week,
//   WorkWeek,
//   Month,
//   Agenda,
//   Inject,
// } from "@syncfusion/ej2-react-schedule";
// import { Typography } from "antd";
// const CalendarSchedule = () => {
//   const data = [
//     {
//       Id: 2,
//       Subject: "Meeting",
//       StartTime: new Date(2018, 1, 15, 10, 0),
//       EndTime: new Date(2018, 1, 15, 12, 30),
//       IsAllDay: false,
//       Status: "Completed",
//       Priority: "High",
//     },
//   ];
//   const fieldsData = {
//     id: "Id",
//     subject: { name: "Subject" },
//     isAllDay: { name: "IsAllDay" },
//     startTime: { name: "StartTime" },
//     endTime: { name: "EndTime" },
//   };
//   const eventSettings = { dataSource: data, fields: fieldsData };

//   return (
//     <>
//       {" "}
//       <Typography style={{ color: "white", fontSize: "3vw" }}>
//         <h1 className="">SHECDULE.</h1>{" "}
//       </Typography>
//       <ScheduleComponent
//         height="550px"
//         selectedDate={new Date(2018, 1, 15)}
//         eventSettings={eventSettings}>
//         <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
//       </ScheduleComponent>
//     </>
//   );
// };
// export default CalendarSchedule;
// // ReactDOM.render(<App />, document.getElementById("schedule"));
import React, { useEffect, useRef } from "react";
import { scheduler } from "dhtmlx-scheduler";
import "dhtmlx-scheduler/codebase/dhtmlxscheduler.css";

const CalendarSchedule = ({ events }) => {
  const schedulerContainer = useRef(null);

  useEffect(() => {
    scheduler.config.header = [
      "day",
      "week",
      "month",
      "date",
      "prev",
      "today",
      "next",
    ];
    scheduler.init(schedulerContainer.current, new Date(), "week");
    scheduler.parse(events);

    return () => {
      // scheduler.clearAll();
      // scheduler.unload();
    };
  }, [events]);

  return (
    <div className="lg:h-[50vh]  h-[80vh] mb-6 bg-white lg:ml-4 lg:w-[70vw] w-[100vw]">
      <div
        ref={schedulerContainer}
        style={{
          width: "70%",
          height: "100%",
          marginTop: "3vw",
          marginLeft: "5vw",
          // fontSize: "2vw",
          overflow: "auto",
        }}></div>
    </div>
  );
};

export default CalendarSchedule;

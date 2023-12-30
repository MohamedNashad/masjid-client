"use client";
import MainLayout from "@/components/layout/main-layout";
import PageHeading from "@/components/molecules/page-heading";
import { AttendancePage } from "@/components/pages/sample";
import React from "react";

type Props = {};

const Attendance = (props: Props) => {
  return (
    <>
      <MainLayout>
        <PageHeading heading="Home" subHeadingOne="Dashboard" />
        <AttendancePage />
      </MainLayout>
    </>
  );
};

export default Attendance;

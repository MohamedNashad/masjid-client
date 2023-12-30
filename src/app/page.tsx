"use client";
import Image from "next/image";
import styles from "./page.module.css";
import MainLayout from "@/components/layout/main-layout";
import PageHeading from "@/components/molecules/page-heading";
import Card from "@/components/molecules/card";
import CardHeaderButtons from "@/components/molecules/card-header-buttons";

import { Box, Divider } from "@chakra-ui/react";
import { AttendancePage, Sample } from "@/components/pages/sample";

import React from "react";
import { GridNextjs } from "@/components/kendo-grids/main";
import TaskTable from "@/components/tanstack-tables/task-table";

export default function Home({ children }: any) {
  return (
    <main
    // className={styles.main}
    >
      <MainLayout>
        <PageHeading heading="Home" subHeadingOne="Dashboard" />
        <Card mb={5}>
          <CardHeaderButtons module="dashboard" />
        </Card>
        <Divider
          orientation="horizontal"
          mt={5}
          mb={5}
          color={"brandPrimary.300"}
        />
        {/* <AttendancePage />
        <Divider
          orientation="horizontal"
          mt={5}
          mb={5}
          color={"brandPrimary.300"}
        />
        <Card>
          <Sample />
        </Card> */}
        {/* {children} */}
        <Card>
          {/* <GridNextjs /> */}
          <Box maxW={1000} mx="auto" px={6} pt={24} fontSize="sm">
            <TaskTable />
          </Box>
        </Card>
      </MainLayout>
    </main>
  );
}

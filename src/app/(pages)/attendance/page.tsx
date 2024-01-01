"use client";
import MainLayout from "@/components/layout/main-layout";
import Card from "@/components/molecules/card";
import PageHeading from "@/components/molecules/page-heading";
import { AttendancePage } from "@/components/pages/sample";
import { Stack } from "@chakra-ui/react";
import {
  TextInputFilter,
  SelectCities,
} from "@/components/molecules/sample-floating-input-select-from-internate";
import './styles.css'
import { AnimatedButton } from "@/components/molecules";
type Props = {};

const Attendance = (props: Props) => {
  return (
    <>
      <MainLayout>
        <PageHeading heading="Home" subHeadingOne="Dashboard" />
        <AttendancePage />

        <Card>
        <AnimatedButton />

          <Stack mt={12} className="floating-sample">
            <TextInputFilter />
            <SelectCities />
          </Stack>
        </Card>
      </MainLayout>
    </>
  );
};

export default Attendance;

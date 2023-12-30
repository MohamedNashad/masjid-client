"use client";
import { GridNextjs } from "@/components/kendo-grids/main";
import MainLayout from "@/components/layout/main-layout";
import Card from "@/components/molecules/card";
import PageHeading from "@/components/molecules/page-heading";
import React from "react";

type Props = {};

const Company = (props: Props) => {
  return (
    <>
      <MainLayout>
        <PageHeading heading="Company" />
        <Card>
          <GridNextjs />
        </Card>
      </MainLayout>
    </>
  );
};

export default Company;

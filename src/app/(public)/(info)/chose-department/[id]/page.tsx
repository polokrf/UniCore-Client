import DepartmentDetails from '@/components/modules/info/department/DepartmentDetails';
import React from 'react';

const DepartmentDetailsPage =async ({params}:{
  params: Promise<{ id: string }>;
}) => {
const id = (await params).id
  return (
    <div>
      <DepartmentDetails id={id}/>
    </div>
  );
};

export default DepartmentDetailsPage;
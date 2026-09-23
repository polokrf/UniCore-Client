'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ta } from 'zod/v4/locales';
import { UserManageTable } from './UserManageTable';
import { ChangeEvent, Suspense, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { TUserQuery } from '@/type/addminAccess/admin.access.type';
import { Input } from '@/components/ui/input';
import useDebounced from '@/hooks/debounced';
import { SkeletonText } from '@/components/layout/loading/SkeletonText';

export function ManageUserTab() {
  const [tab, setTab] = useState<'ALL' | 'ACTIVE' | 'BLOCKED'>('ALL');
  const [roleTab, setRoleTab] = useState<
    'ALL' | 'STUDENT' | 'TEACHER' | 'USER'
  >('ALL');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const StatusList = [
    ['ALL', 'All'],
    ['ACTIVE', 'Active'],
    ['BLOCKED', 'Blocked'],
  ];

  const roleList = [
    ['ALL', 'All'],
    ['STUDENT', 'Student'],
    ['TEACHER', 'Teacher'],
    ['USER', 'User'],
  ];

  const debouncedValue = useDebounced(search);
  const handleSearch = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    console.log('INPUT:', e.target.value);
    const searchValue = e.target.value;
    setSearch(searchValue.trim());
    setPage(1);
  };

  const queryParams: TUserQuery = {
    page,
    limit: 10,
    ...(debouncedValue ? { search: debouncedValue } : {}),
    ...(tab === 'ALL' ? {} : { isActive: tab }),
    ...(roleTab === 'ALL' ? {} : { role: roleTab }),
  };

  return (
    <div>
      <div className="mb-3  w-full mx-auto md:w-[50%]">
        <Input
          onChange={e => handleSearch(e)}
          value={search}
          type="search"
          placeholder="Search by name or email"
        />
      </div>

      <div className="flex md:flex-row flex-col  justify-between items-center gap-2">
        <div>
          <Tabs
            value={tab}
            onValueChange={value => setTab(value)}
            className="w-full"
          >
            <TabsList>
              {StatusList.map(([value, tab]) => (
                <TabsTrigger key={value} value={value}>
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* role filtering */}
        <div>
          <Tabs
            value={roleTab}
            onValueChange={value => setRoleTab(value)}
            className="w-full"
          >
            <TabsList>
              {roleList.map(([value, tab]) => (
                <TabsTrigger key={value} value={value}>
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      <Suspense fallback={<SkeletonText />}>
        <UserManageTable {...queryParams} handleChangPage={setPage} />
      </Suspense>
    </div>
  );
}

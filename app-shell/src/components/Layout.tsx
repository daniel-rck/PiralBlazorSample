import React from 'react';
import { ComponentsState, SwitchErrorInfo } from 'piral-core';
import { Menu } from 'piral-menu';
import { Modals } from 'piral-modals';
import { Notifications } from 'piral-notifications';
import { Loading } from './Loading';
import { useHistory } from "react-router";
import { Link, Text } from "@fluentui/react";
import { Breadcrumbs } from 'piral-breadcrumbs';
import { FavoritesMenu } from './FavoritesMenu';
import { NotificationsMenu } from './NotificationsMenu';
import { AccountMenu } from './AccountMenu';

export const components: Partial<ComponentsState> = {
  ErrorInfo: (props) => (
    <div className="flex justify-center">
      <div className="mt-10 rounded-xl p-3 ms-depth-64">
        <SwitchErrorInfo {...props} />
      </div>
    </div>
  ),
  Layout: ({ children }) => (
    <div className="min-h-screen">
      <Menu type="header" />
      <main className="min-h-screen pt-14">
        {children}
      </main>
      <footer>
        <Notifications />
        <Modals />
      </footer>
    </div>
  ),
  LoadingIndicator: Loading,
  NotificationsHost: ({ children }) => <div className="notifications">{children}</div>,
  NotificationsToast: ({ options, onClose, children }) => (
    <div className={`notification-toast ${options.type}`}>
      <div className="notification-toast-details">
        {options.title && <div className="notification-toast-title">{options.title}</div>}
        <div className="notification-toast-description">{children}</div>
      </div>
      <div className="notification-toast-close" onClick={onClose} />
    </div>
  ),
  MenuContainer: (props) => (
    <nav className="bg-my-green px-3 py-1 fixed w-full z-50 top-0">
      <div className="flex justify-between">
        <div className="flex items-end">          
          <Breadcrumbs />
        </div>

        <div className="flex flex-row gap-2 items-center">
          <FavoritesMenu {...props} />
          <NotificationsMenu {...props} />
          <AccountMenu />
        </div>
      </div>
    </nav>
  ),
  MenuItem: ({ children }) => (
    <div className="bg-gray-300 p-2 rounded-lg">
      {children}
    </div>
  ),
  DashboardContainer: ({ children }) => (
    <div className="container mx-auto py-8">
      <div className="grid grid-flow-row-dense xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
        {children}
      </div>
    </div>
  ),
  DashboardTile: ({children, columns, rows}) => (
    <div className={`flex bg-gray-300 p-4 rounded-lg col-span-${columns} row-span-${rows} transform transition duration-500 hover:scale-105 hover:shadow-xl`}>
      {children}
    </div>
  ),
  BreadcrumbsContainer: ({ children }) => (
    <div className="flex ml-3 items-end">
      {children}
    </div>
  ),
  BreadcrumbItem: ({ children, current, path }) => {
    const history = useHistory();
    if (current) {
      return (
        <Text className="text-white" variant={"mediumPlus"}>
          {children}
        </Text>
      );
    } else {
      return (
        <>
          <Link onClick={() => history.push(path)} underline={false}>
            <Text className="text-white" variant={"mediumPlus"}>
              {children}
            </Text>
          </Link>
          <Text className="text-white mx-1" variant={"mediumPlus"}>
            &#9656;
          </Text>
        </>
      );
    }
  },
};

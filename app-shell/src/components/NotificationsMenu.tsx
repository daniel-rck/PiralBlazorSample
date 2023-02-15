import React, { Fragment, PropsWithChildren } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Icon } from '@fluentui/react';

export const NotificationsMenu: React.FC<PropsWithChildren> = ({ children }) => {

  return (
    <Popover className="relative">
      <Popover.Button className="bg-gray-300 flex rounded-full ring-1 ring-gray-500 h-8 w-8 justify-center items-center">
        <Icon iconName="Message" title="Notifications" aria-label="notifications" className="text-lg" />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"								>
        <Popover.Panel className="absolute z-10 w-screen max-w-md right-0">
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="relative grid gap-2 bg-white p-4 lg:grid-cols-2">
              {/* <span>TODO: Benachrichtigungen</span> */}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

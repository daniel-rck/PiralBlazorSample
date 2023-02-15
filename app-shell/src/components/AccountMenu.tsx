import React from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react';
import { useTranslate } from 'piral-translate';
import { Icon } from '@fluentui/react';

export const AccountMenu: React.FC = () => {
  const translate = useTranslate();
  const logout = React.useCallback(() => {
    alert("logout");
  }, []);

  // Should come from keycloak
  const name = "username"
  const email = "email";

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="bg-transparent hover:bg-white text-white font-semibold hover:text-my-green px-4 border border-white hover:border-transparent rounded">
        <p>
          <span>{name}</span><br />
          <span>{email}</span>
        </p>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute right-0 w-full mt-1 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button onClick={logout} className={`${active ? 'bg-gray-200' : ''} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                  <Icon aria-label="settings" iconName="SignOut" className="w-5 h-5 mr-2" />
                  {translate('abmelden')}
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

import { colors, ROUTE } from '@/constants';
import { useRoutes } from '@/hooks/useRoutes';
import { useSettingsStore } from '@/stores';
import { useReactive, useToggle } from 'ahooks';
import { clx, Drawer, MenuItem, Menus } from 'components-next';
import React from 'react';

const NarBar = () => {
  const { changeI18n, menu, i18nOption, setI18nOption, toggleDark, isDarkMode } =
    useSettingsStore();

  const { push, navigateHome, pathname } = useRoutes();
  // const { data: teamData } = useTeamInfosQuery();
  const { mainLogo, websiteName } = {};

  const [openMenu, { toggle: toggleMenu }] = useToggle(false);
  const state = useReactive({ openKeys: ['0'], selectedKeys: ['0'], currentPath: ROUTE.home });
  const backgroundColor = colors.primary['400'];

  const renderDark = (
    <button
      className={clx(
        'py-2 px-2 items-center flex justify-center rounded-full border-2 border-gray-600 bg-gray-50 dark:bg-black',
      )}
      onClick={() => {
        toggleDark();
      }}
    >
      <h5 className="uppercase text-sm dark:text-white text-secondary-400">
        {isDarkMode ? 'dark' : 'light'}
      </h5>
    </button>
  );

  const btnI18n = (
    <>
      {i18nOption.map((i) => {
        return (
          <button
            className={clx(
              'sm:px-3 sm:py-1 px-8 py-3  border-2 border-double bg-white text-gray-400',
              i.isActive && 'bg-secondary-400 text-white',
            )}
            key={i.value}
            onClick={() => {
              changeI18n(i.value);
              setI18nOption(i.value as any);
            }}
          >
            {i.label}
          </button>
        );
      })}
    </>
  );
  const renderI18n = (
    <div className="md:px-8 px-5 flex gap-2 justify-center bg-white mx-6 my-4 py-4 rounded-xl">
      {btnI18n}
    </div>
  );

  return (
    <>
      {openMenu && (
        <Drawer
          open={openMenu}
          onClose={toggleMenu}
          handler={false}
          clxContent="w-72"
          contentWrapperStyle={{ backgroundColor }}
        >
          <Menus
            style={{
              backgroundColor,
            }}
            mode="inline"
            onOpenChange={(openKeys) => {
              state.openKeys = openKeys;
            }}
            onSelect={({ selectedKeys }) => {
              state.selectedKeys = selectedKeys;
            }}
            openKeys={state.openKeys}
            selectedKeys={state.selectedKeys}
          >
            {menu.map((_) => {
              return (
                <MenuItem key={_.name} className="w-40 text-white" onClick={() => push(_.path)}>
                  <div className="flex items-center justify-center">
                    {_?.icon} <span className="ml-3 uppercase">{_.name}</span>
                  </div>
                </MenuItem>
              );
            })}
            {renderI18n}
          </Menus>
        </Drawer>
      )}
      <div className="flex flex-wrap place-items-center fixed z-50">
        <section className="relative mx-auto">
          {/* navbar */}
          <nav className="flex justify-between text-white w-screen bg-gradient-to-r from-gray-800  to-primary-800">
            <div className="px-6 xl:px-12 py-3 flex w-full items-center hover:cursor-pointer">
              <a
                className="text-2xl font-bold font-heading flex items-center gap-3"
                onClick={navigateHome}
              >
                <img className="h-9 sm:h-12 rounded-full" src={mainLogo?.url} alt="logo" />
                <span>{websiteName}</span>
              </a>

              {/* Nav Links */}
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12 ">
                {menu?.map?.((i) => {
                  const isActiveRoute = pathname === i?.path;

                  return (
                    <li
                      key={i.path}
                      className={clx(
                        'border-b-2  p-2 cursor-pointer',
                        isActiveRoute ? 'border-white' : 'border-none',
                      )}
                    >
                      <a
                        className="text-lg hover:text-gray-200 uppercase"
                        onClick={() => {
                          push(i.path);
                          state.currentPath = i.path;
                        }}
                      >
                        {i.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
              {/* Header Icons */}
              <div className="hidden xl:flex items-center space-x-5">
                {renderDark}
                {btnI18n}

                {/* Sign In / Register      */}
                {/* {isLoggedIn && (
                  <>
                    <Dropdown
                      items={[
                        {
                          title: 'Loan History',
                          onClick: () => {
                            push(ROUTE.loanRequest);
                          },
                        },
                        {
                          title: 'Logout',
                          onClick: () => {
                            setIsLoggedIn(false);
                            setUserInfo({});
                          },
                          colorItem: 'red',
                        },
                      ]}
                    >
                      <div className="flex items-center gap-2 hover:cursor-pointer hover:text-gray-200">
                        <a className="flex items-center hover:text-gray-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 hover:text-gray-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </a>
                        {userInfo?.phoneNumber}
                      </div>
                    </Dropdown>
                  </>
                )} */}
              </div>
            </div>

            <a className="navbar-burger self-center mr-7 xl:hidden" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </nav>
        </section>
      </div>
    </>
  );
};

export default NarBar;

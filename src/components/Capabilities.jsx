import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { Checkbox } from './ui/checkbox';

const Capabilities = ({userData}) => {
  return (
    <>
    <section className="rightPartInner w-full pb-4">
                  <section className="rightPart1Header flex items-center justify-start gap-2 py-2 bg-blue-500 px-2 rounded-md">
                    <FontAwesomeIcon icon={faWrench} size="2x" />
                    <h1 className="text-xl font-semibold">Capabilities</h1>
                  </section>
                  <section className="leftPart1Body flex items-center justify-start flex-row flex-wrap  pt-4 gap-2 ml-2">
                    <section className="flex items-center justify-start flex-row gap-2 basis-1/4 ">
                      {userData?.capabilities?.csa === true && (
                        <Checkbox
                          className="appearance-none border-gray-500 "
                          defaultChecked
                        />
                      )}
                      {userData?.capabilities?.csa === false && (
                        <Checkbox className="appearance-none border-gray-500" />
                      )}
                      <span>CSA</span>
                    </section>
                    <section className="flex items-center justify-start flex-row gap-2 basis-1/4">
                      {userData?.capabilities?.attorney === true && (
                        <Checkbox
                          className="appearance-none border-gray-500"
                          defaultChecked
                        />
                      )}
                      {userData?.capabilities?.attorney === false && (
                        <Checkbox className="appearance-none border-gray-500" />
                      )}
                      <span>Attorney</span>
                    </section>
                    <section className="flex items-center justify-start flex-row gap-2 basis-1/4">
                      {userData?.capabilities?.fax === true && (
                        <Checkbox
                          className="appearance-none border-gray-500"
                          defaultChecked
                        />
                      )}
                      {userData?.capabilities?.fax === false && (
                        <Checkbox className="appearance-none border-gray-500" />
                      )}
                      <span>Fax</span>
                    </section>
                    <section className="flex items-center justify-start flex-row gap-2 basis-1/4">
                      {userData?.capabilities?.email === true && (
                        <Checkbox
                          className="appearance-none border-gray-500"
                          defaultChecked
                        />
                      )}
                      {userData?.capabilities?.email === false && (
                        <Checkbox className="appearance-none border-gray-500" />
                      )}
                      <span>Email</span>
                    </section>
                    <section className="flex items-center justify-start flex-row gap-2 basis-1/4">
                      {userData?.capabilities?.internet === true && (
                        <Checkbox
                          className="appearance-none border-gray-500"
                          defaultChecked
                        />
                      )}
                      {userData?.capabilities?.internet === false && (
                        <Checkbox className="appearance-none border-gray-500" />
                      )}
                      <span>Internet</span>
                    </section>
                    <section className="flex items-center justify-start flex-row gap-2 basis-1/4">
                      {userData?.capabilities?.mobileHotspot === true && (
                        <Checkbox
                          className="appearance-none border-gray-500"
                          defaultChecked
                        />
                      )}
                      {userData?.capabilities?.mobileHotspot === false && (
                        <Checkbox className="appearance-none border-gray-500" />
                      )}
                      <span>Mobile Hotspots</span>
                    </section>
                    <section className="flex items-center justify-start flex-row gap-2 basis-1/4">
                      {userData?.capabilities?.print === true && (
                        <Checkbox
                          className="appearance-none border-gray-500"
                          defaultChecked
                        />
                      )}
                      {userData?.capabilities?.print === false && (
                        <Checkbox className="appearance-none border-gray-500" />
                      )}
                      <span>Print</span>
                    </section>
                    <section className="flex items-center justify-start flex-row gap-2 basis-1/4">
                      {userData?.capabilities?.scanbacks === true && (
                        <Checkbox
                          className="appearance-none border-gray-500"
                          defaultChecked
                        />
                      )}
                      {userData?.capabilities?.scanbacks === false && (
                        <Checkbox className="appearance-none border-gray-500" />
                      )}
                      <span>Scanbacks</span>
                    </section>
                  </section>
                </section></>
  )
}

export default Capabilities

import React, { useState } from 'react'
import InfoIcon from '@/public/icon/info.svg'
import XIcon from '@/public/icon/x.svg'
import ResetIcon from '@/public/icon/reset.svg'
import Space from '@/app/components/atoms/Space'
import GrayXIcon from '@/public/icon/gray-x.svg'
import useDialog from '@/app/hooks/dialog'
import Checkbox from '../atoms/Checkbox'

interface PopupProps {
  id?: string
  message?: string
}

const Popup = ({ id, message }: PopupProps) => {
  const { closeDialog } = useDialog()
  const [checked, setChecked] = useState(false)

  const handleClose = () => {
    console.log('🧡💛💙 영우의 로그 => message', message)
    closeDialog(id)
  }

  const handleCheck = () => {
    setChecked((prev) => !prev)
  }

  return (
    <>
      <div
        className="fixed bottom-0 bg-WHITE_1000 rounded-t-[2rem] max-w-screen w-full"
        style={{ height: 'calc(100vh - 10.8rem)', paddingTop: '4rem' }}
      >
        {/* 헤더 영역 */}
        <div className="flex items-center px-[2.2rem]">
          <div className="font-extrabold text-[2.2rem] pr-[1.4rem] tracking-[-0.025em]">지역 선택</div>
          <div className="flex items-center">
            <div className="pr-[0.7rem]">
              <InfoIcon />
            </div>
            <div className="font-semibold text-[1.2rem] leading-[1.432rem] text-GREY_700">
              <span className="text-GREEN_800 tracking-[-0.025em]">최대 3개</span>까지 선택 가능해요
            </div>
          </div>
          <Space />
          {/* X 버튼 */}
          <div onClick={handleClose}>
            <XIcon />
          </div>
        </div>

        {/* 칩 영역 */}
        <div className="pt-[0.9rem] flex items-center px-[2.2rem]">
          {/* 새로고침 버튼 */}
          <div className="pr-[0.8rem]">
            <div className="bg-GREEN_800 w-[2.2rem] h-[2.2rem] rounded-[50%] justify-center items-center flex shadow-CARD_SHADOW">
              <ResetIcon />
            </div>
          </div>

          {/* 지역 칩 영역 */}
          <div className="h-[3.8rem] w-[31.6rem] flex items-center overflow-x-auto flex-nowrap gap-[0.8rem] pl-[0.6rem]">
            <div className="px-[1rem] py-[0.4rem] bg-GREY_200 rounded-[5rem] text-GREY_700 font-bold text-[1.2rem] flex items-center whitespace-nowrap">
              서울 / 강남구
              <div className="pl-[0.2rem]">
                <GrayXIcon />
              </div>
            </div>
            <div className="px-[1rem] py-[0.4rem] bg-GREY_200 rounded-[5rem] text-GREY_700 font-bold text-[1.2rem] flex items-center whitespace-nowrap">
              서울 / 강남구
              <div className="pl-[0.2rem]">
                <GrayXIcon />
              </div>
            </div>
            <div className="px-[1rem] py-[0.4rem] bg-GREY_200 rounded-[5rem] text-GREY_700 font-bold text-[1.2rem] flex items-center whitespace-nowrap">
              서울 / 강남구
              <div className="pl-[0.2rem]">
                <GrayXIcon />
              </div>
            </div>
            <div className="px-[1rem] py-[0.4rem] bg-GREY_200 rounded-[5rem] text-GREY_700 font-bold text-[1.2rem] flex items-center whitespace-nowrap">
              서울 / 강남구
              <div className="pl-[0.2rem]">
                <GrayXIcon />
              </div>
            </div>
            <div className="px-[1rem] py-[0.4rem] bg-GREY_200 rounded-[5rem] text-GREY_700 font-bold text-[1.2rem] flex items-center whitespace-nowrap">
              서울 / 강남구
              <div className="pl-[0.2rem]">
                <GrayXIcon />
              </div>
            </div>
          </div>
        </div>

        {/* 선택 영역 */}
        <div
          className="w-full flex border-t-[0.1rem] border-WHITE_900 mt-[0.7rem]"
          style={{ height: 'calc(100% - 8.8rem)' }}
        >
          {/* 시 */}
          <div className="overflow-y-auto min-w-[10.4rem] font-extrabold text-[1.4rem] border-r-[0.1rem] border-WHITE_900">
            <div className="pl-[2.2rem] flex items-center h-[4.8rem] text-GREEN_800">서울</div>
            <div className="pl-[2.2rem] flex items-center h-[4.8rem] bg-WHITE_900 text-GREY_700">서울</div>
            <div className="pl-[2.2rem] flex items-center h-[4.8rem] bg-WHITE_900 text-GREY_700">서울</div>
            <div className="pl-[2.2rem] flex items-center h-[4.8rem] bg-WHITE_900 text-GREY_700">서울</div>
            <div className="pl-[2.2rem] flex items-center h-[4.8rem] bg-WHITE_900 text-GREY_700">서울</div>
            <div className="pl-[2.2rem] flex items-center h-[4.8rem] bg-WHITE_900 text-GREY_700">서울</div>
            <div className="pl-[2.2rem] flex items-center h-[4.8rem] bg-WHITE_900 text-GREY_700">서울</div>
            <div className="pl-[2.2rem] flex items-center h-[4.8rem] bg-WHITE_900 text-GREY_700">서울</div>
            <div className="pl-[2.2rem] flex items-center h-[4.8rem] bg-WHITE_900 text-GREY_700">서울</div>
            <div className="pl-[2.2rem] flex items-center h-[4.8rem] bg-WHITE_900 text-GREY_700">서울</div>
            <div className="pl-[2.2rem] flex items-center h-[4.8rem] bg-WHITE_900 text-GREY_700">서울</div>
            <div className="pl-[2.2rem] flex items-center h-[4.8rem] bg-WHITE_900 text-GREY_700">서울</div>
            <div className="pl-[2.2rem] flex items-center h-[4.8rem] bg-WHITE_900 text-GREY_700">서울</div>
            <div className="pl-[2.2rem] flex items-center h-[4.8rem] bg-WHITE_900 text-GREY_700">서울</div>
            <div className="pl-[2.2rem] flex items-center h-[4.8rem] bg-WHITE_900 text-GREY_700">서울</div>
          </div>

          {/* 구 */}
          <div className="overflow-y-auto pr-[2.2rem] w-full">
            <label className="flex pl-[2.3rem] items-center h-[4.8rem] cursor-pointer">
              <div className="font-bold text-[1.4rem] text-BLACK_1000">강남구</div>
              <Space />
              <Checkbox checked={checked} onChange={handleCheck} />
            </label>
            <div className="flex pl-[2.3rem] items-center h-[4.8rem]">
              <div className="font-bold text-[1.4rem] text-BLACK_1000">강남구</div>
              <Space />
              <Checkbox />
            </div>
            <div className="flex pl-[2.3rem] items-center h-[4.8rem]">
              <div className="font-bold text-[1.4rem] text-BLACK_1000">강남구</div>
              <Space />
              <Checkbox />
            </div>
            <div className="flex pl-[2.3rem] items-center h-[4.8rem]">
              <div className="font-bold text-[1.4rem] text-BLACK_1000">강남구</div>
              <Space />
              <Checkbox />
            </div>
            <div className="flex pl-[2.3rem] items-center h-[4.8rem]">
              <div className="font-bold text-[1.4rem] text-BLACK_1000">강남구</div>
              <Space />
              <Checkbox />
            </div>
            <div className="flex pl-[2.3rem] items-center h-[4.8rem]">
              <div className="font-bold text-[1.4rem] text-BLACK_1000">강남구</div>
              <Space />
              <Checkbox />
            </div>
            <div className="flex pl-[2.3rem] items-center h-[4.8rem]">
              <div className="font-bold text-[1.4rem] text-BLACK_1000">강남구</div>
              <Space />
              <Checkbox />
            </div>
            <div className="flex pl-[2.3rem] items-center h-[4.8rem]">
              <div className="font-bold text-[1.4rem] text-BLACK_1000">강남구</div>
              <Space />
              <Checkbox />
            </div>
            <div className="flex pl-[2.3rem] items-center h-[4.8rem]">
              <div className="font-bold text-[1.4rem] text-BLACK_1000">강남구</div>
              <Space />
              <Checkbox />
            </div>
            <div className="flex pl-[2.3rem] items-center h-[4.8rem]">
              <div className="font-bold text-[1.4rem] text-BLACK_1000">강남구</div>
              <Space />
              <Checkbox />
            </div>
            <div className="flex pl-[2.3rem] items-center h-[4.8rem]">
              <div className="font-bold text-[1.4rem] text-BLACK_1000">강남구</div>
              <Space />
              <Checkbox />
            </div>
            <div className="flex pl-[2.3rem] items-center h-[4.8rem]">
              <div className="font-bold text-[1.4rem] text-BLACK_1000">강남구</div>
              <Space />
              <Checkbox />
            </div>
            <div className="flex pl-[2.3rem] items-center h-[4.8rem]">
              <div className="font-bold text-[1.4rem] text-BLACK_1000">강남구</div>
              <Space />
              <Checkbox />
            </div>
            <div className="flex pl-[2.3rem] items-center h-[4.8rem]">
              <div className="font-bold text-[1.4rem] text-BLACK_1000">강남구</div>
              <Space />
              <Checkbox />
            </div>
            <div className="flex pl-[2.3rem] items-center h-[4.8rem]">
              <div className="font-bold text-[1.4rem] text-BLACK_1000">강남구</div>
              <Space />
              <Checkbox />
            </div>
          </div>
        </div>
      </div>
      <div
        className="fixed bottom-[2.4rem] bg-GREEN_800 w-[34.2rem] left-[50%] h-[4.2rem] justify-center items-center flex rounded-[1rem] font-bold text-WHITE_1000 text-[1.6rem]"
        style={{ transform: 'translateX(-50%)' }}
      >
        선택 완료
      </div>
    </>
  )
}

export default Popup

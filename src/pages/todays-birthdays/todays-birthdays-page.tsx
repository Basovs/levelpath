import { TitleLayout } from '@/layouts/title-layout'
import { BirthdayFetchButton } from '@/pages/todays-birthdays/components/birthday-fetch-button'
import { BirthdayList } from '@/pages/todays-birthdays/components/birthday-list'

import { PaginationButtons } from './components/pagination-buttons'
import { SwitchDateButtons } from './components/switch-date-buttons'
import { useGetBirthdaysStore } from './stores/get-birthdays/get-birthdays-store'

export const TodaysBirthdaysPage = () => {
  const { date } = useGetBirthdaysStore()
  const formattedDate = date.toLocaleDateString('en-US', {
    dateStyle: 'medium',
  })

  return (
    <TitleLayout title={`Birthdays on this day - ${formattedDate}`}>
      <div className="flex flex-col items-center p-2">
        <BirthdayFetchButton />

        <div className="flex flex-col items-center gap-6">
          <BirthdayList />

          <div className="flex justify-between w-full">
            <PaginationButtons />

            <SwitchDateButtons />
          </div>
        </div>
      </div>
    </TitleLayout>
  )
}

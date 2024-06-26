import { UseQueryResult } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import { vi } from 'vitest'

import { BirthdayList } from '.'
import { useGetTodaysBirthdaysQuery } from '../../queries/use-get-todays-birthdays-query'

vi.mock('@/pages/todays-birthdays/queries/use-get-todays-birthdays-query', () => ({
  useGetTodaysBirthdaysQuery: vi.fn(),
}))

const mockUseGetTodaysBirthdaysQuery = vi.mocked(useGetTodaysBirthdaysQuery)

describe('BirthdayList', () => {
  test('No birthdays found element rendered', async () => {
    mockUseGetTodaysBirthdaysQuery.mockReturnValue({
      isLoading: false,
      isFetched: true,
      data: [],
    } as unknown as UseQueryResult<
      Array<{ image: string; name: string; year: number; text: string }>,
      Error
    >)

    render(<BirthdayList />)

    const noBirthdaysElement = await screen.findByTestId('no-birthdays-message')
    expect(noBirthdaysElement).toBeDefined()
  })
})

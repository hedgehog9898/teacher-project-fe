import { mountSuspended } from '@nuxt/test-utils/runtime'
import { test, expect } from 'vitest'
import IndexPage from '~/pages/index.vue'

test('can mount some component', async () => {
  const component = await mountSuspended(IndexPage)
  expect(component.text()).toMatchInlineSnapshot('"test"')
})
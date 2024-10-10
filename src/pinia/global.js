import { FETCH_METHOD, usePagination, useRequest } from 'frontend_common/fetch'

import { API_PATH } from '@/api/index.js'

export const useNewsStore = defineStore('news', () => {
	const { list: news } = usePagination({
		fetchOptions: {
			url: API_PATH.NEWS,
			params: {
				pageNum: 1,
				pageSize: 20,
				country: 'br',
			},
			initialValues: [],
		}
	})

	return { news }
})

export const useTutorStore = defineStore('tutor', () => {
	const { list: tutor } = useRequest({
		url: API_PATH.TUTOR,
		method: FETCH_METHOD.GET,
		params: {
			categoryId: 2
		},
		initialValues: [],
	})

	return { tutor }
})

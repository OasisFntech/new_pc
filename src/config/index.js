export const useHomeGird = (index) => {
	const { t } = useI18n()

	if (index === 1) {
		return {
			title: t('home.intro.title'),
			description: t('home.intro.description'),
			links: [
				{ label: t('home.intro.list[0].label'), url: '/pc/what-we-do/' },
				{ label: t('home.intro.list[1].label'), url: 'void();' }
			],
			quote: t('home.intro.quote'),
			author: t('home.intro.author')
		}
	}
	return computed(() => [
		{
			title: t('home.posts1[0].title'), // 使用 t 函数获取多语言文本
			subhead: t('home.posts1[0].description'),
			cover: 1,
		},
		{
			title: t('home.posts1[1].title'),
			subhead: t('home.posts1[1].description'),
			cover: 2,
		},
		undefined,
		undefined,
		undefined,
		{
			title: t('home.posts2[0].title'),
			subhead: t('home.posts2[0].description'),
			cover: 3,
		},
		{
			title: t('home.posts2[1].title'),
			subhead: t('home.posts2[1].description'),
			cover: 4,
		},
		{
			title: t('home.posts2[2].title'),
			subhead: t('home.posts2[2].description'),
			cover: 5,
		},
		{
			title: t('home.posts3[0].title'),
			subhead: t('home.posts3[0].description'),
			cover: 6,
		},
		{
			title: t('home.posts3[1].title'),
			subhead: t('home.posts3[1].description'),
			cover: 7,
		},
		{
			title: t('home.posts3[2].title'),
			subhead: t('home.posts3[2].description'),
			cover: 8,
		},
		undefined,
		undefined,
		{
			title: t('home.posts4[0].title'),
			subhead: t('home.posts4[0].description'),
			cover: 9,
		},
		{
			title: t('home.posts4[1].title'),
			subhead: t('home.posts4[1].description'),
			cover: 10,
		},
		{
			title: t('home.posts4[2].title'),
			subhead: t('home.posts4[2].description'),
			cover: 11,
		}
	])
}

export const useWhoGird = (index) => {
	const { t } = useI18n()

	if (index === 1) {
		return {
			title: t('who.intro.title'),
			description: t('who.intro.description'),
			links: [
				{ label: t('who.intro.list[0].label'), url: '/pc/what-we-do/' },
				{ label: t('who.intro.list[1].label'), url: 'void();' },
				{ label: t('who.intro.list[2].label'), url: 'void();' },
				{ label: t('who.intro.list[3].label'), url: 'void();' },
				{ label: t('who.intro.list[4].label'), url: 'void();' },
			],
			quote: t('who.intro.quote'),
			author: t('who.intro.author')
		}
	}

	return computed(() => [
		{
			title: t('who.posts1[0].title'), // 使用 t 函数获取多语言文本
			subhead: t('who.posts1[0].description'),
			cover: 1,
		},
		{
			title: t('who.posts1[1].title'),
			subhead: t('who.posts1[1].description'),
			cover: 2,
		},
		{
			title: t('who.posts1[2].title'),
			subhead: t('who.posts1[2].description'),
			cover: 3,
		},
		{
			title: t('who.posts1[3].title'),
			subhead: t('who.posts1[4].description'),
			cover: 4,
		},
		undefined,
		{
			title: t('who.posts2[0].title'),
			subhead: t('who.posts2[0].description'),
			cover: 5,
		},
		{
			title: t('who.posts2[1].title'),
			subhead: t('who.posts2[1].description'),
			cover: 6,
		},
		{
			title: t('who.posts2[2].title'),
			subhead: t('who.posts2[2].description'),
			cover: 7,
		},
		undefined,
		undefined,
		{
			title: t('who.posts3[0].title'),
			subhead: t('who.posts3[0].description'),
			cover: 8,
		},
		{
			title: t('who.posts3[1].title'),
			subhead: t('who.posts3[1].description'),
			cover: 9,
		},
		undefined,
		undefined,
		{
			title: t('who.posts4[0].title'),
			subhead: t('who.posts4[0].description'),
			cover: 10,
		},
		{
			title: t('who.posts4[1].title'),
			subhead: t('who.posts4[1].description'),
			cover: 11,
		},
	])
}

export const useWhatGird = (type) => {
	const { t } = useI18n()
	if (type === 1) {
		return {
			title: t('what.intro.title'),
			description: t('what.intro.description'),
			links: [
				{ label: t('what.intro.list[0].label'), url: '/pc/what-we-do/' },
				{ label: t('what.intro.list[1].label'), url: 'void();' },
				{ label: t('what.intro.list[2].label'), url: 'void();' },
				{ label: t('what.intro.list[3].label'), url: 'void();' }
			],
			quote: t('what.intro.quote'),
			author: t('what.intro.author')
		}
	}

	if (type === 2) {
		return computed(() => [
			undefined,
			{
				title: t('what.posts1[0].title'), // 使用 t 函数获取多语言文本
				subhead: t('what.posts1[0].description'),
				cover: 1,
			},
			{
				title: t('what.posts1[1].title'),
				subhead: t('what.posts1[1].description'),
				cover: 2,
			},
			{
				title: t('what.posts1[2].title'),
				subhead: t('what.posts1[2].description'),
				cover: 3,
			}
		])
	}

	return computed(() => [
		undefined,
		undefined,
		{
			title: t('people.posts2[0].title'),
			subhead: t('people.posts2[0].description'),
			cover: 4,
		},
		{
			title: t('people.posts2[1].title'),
			subhead: t('people.posts2[1].description'),
			cover: 5,
		}
	])
}

export const useSustainGird = (index) => {
	const { t } = useI18n()

	if (index === 1) {
		return {
			title: t('sustain.intro.title'),
			description: t('sustain.intro.description'),
			links: [
				{ label: t('sustain.intro.list[0].label'), url: '/pc/what-we-do/' },
				{ label: t('sustain.intro.list[1].label'), url: 'void();' },
				{ label: t('sustain.intro.list[2].label'), url: 'void();' },
				{ label: t('sustain.intro.list[3].label'), url: 'void();' }
			],
			quote: t('sustain.intro.quote'),
			author: t('sustain.intro.author')
		}
	}

	return computed(() => [
		{
			title: t('sustain.posts1[0].title'), // 使用 t 函数获取多语言文本
			subhead: t('sustain.posts1[0].description'),
			cover: 1,
		},
		{
			title: t('sustain.posts1[1].title'),
			subhead: t('sustain.posts1[1].description'),
			cover: 2,
		},
		{
			title: t('sustain.posts1[2].title'),
			subhead: t('sustain.posts1[2].description'),
			cover: 3,
		},
		undefined,
		undefined,
		{
			title: t('sustain.posts2[0].title'),
			subhead: t('sustain.posts2[0].description'),
			cover: 4,
		},
		{
			title: t('sustain.posts2[1].title'),
			subhead: t('sustain.posts2[1].description'),
			cover: 5,
		},
		{
			title: t('sustain.posts2[2].title'),
			subhead: t('sustain.posts2[2].description'),
			cover: 6,
		},
		undefined,
		undefined,
		{
			title: t('sustain.posts3[0].title'),
			subhead: t('sustain.posts3[0].description'),
			cover: 7,
		},
		{
			title: t('sustain.posts3[1].title'),
			subhead: t('sustain.posts3[1].description'),
			cover: 8,
		},
	])
}

export const usePeopleGird = (index) => {
	const { t } = useI18n()

	if (index === 1) {
		return {
			title: t('people.intro.title'),
			description: t('people.intro.description'),
			links: [
				{ label: t('people.intro.list[0].label'), url: '/pc/what-we-do/' },
				{ label: t('people.intro.list[1].label'), url: 'void();' },
				{ label: t('people.intro.list[2].label'), url: 'void();' },
				{ label: t('people.intro.list[3].label'), url: 'void();' }
			],
			quote: t('people.intro.quote'),
			author: t('people.intro.author')
		}
	}

	return computed(() => [
		{
			title: t('people.posts1[0].title'), // 使用 t 函数获取多语言文本
			subhead: t('people.posts1[0].description'),
			cover: 1,
		},
		{
			title: t('people.posts1[1].title'),
			subhead: t('people.posts1[1].description'),
			cover: 2,
		},
		{
			title: t('people.posts1[2].title'),
			subhead: t('people.posts1[2].description'),
			cover: 3,
		},
		undefined,
		undefined,
		{
			title: t('people.posts2[0].title'),
			subhead: t('people.posts2[0].description'),
			cover: 4,
		},
		{
			title: t('people.posts2[1].title'),
			subhead: t('people.posts2[1].description'),
			cover: 5,
		},
		{
			title: t('people.posts2[2].title'),
			subhead: t('people.posts2[2].description'),
			cover: 6,
		},
		undefined,
		undefined,
		{
			title: t('people.posts3[0].title'),
			subhead: t('people.posts3[0].description'),
			cover: 7,
		},
		{
			title: t('people.posts3[1].title'),
			subhead: t('people.posts3[1].description'),
			cover: 8,
		},
	])
}
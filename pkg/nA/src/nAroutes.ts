// nAroutes.ts

import { z, createRoute } from '@hono/zod-openapi';

//interface tPerson {
//	name: string;
//	age: number;
//	lieu: string;
//}
const zPerson = z.object({
	name: z.string(),
	age: z.number(),
	lieu: z.string()
});
type tPerson = z.infer<typeof zPerson>;

// openapi routes

const rtGet_root = createRoute({
	method: 'get',
	path: '/',
	request: {},
	responses: {
		200: {
			content: {
				'text/plain': {
					schema: z.string()
				}
			},
			description: 'A sweet message'
		}
	}
});
const rtGet_argy = createRoute({
	method: 'get',
	path: '/argy',
	request: {
		query: z.object({ namo: z.string() })
	},
	responses: {
		200: {
			content: {
				'text/plain': {
					schema: z.string()
				}
			},
			description: 'A lala message'
		}
	}
});
const rtGet_two = createRoute({
	method: 'get',
	path: '/two',
	request: {
		query: z.object({ nama: z.string() })
	},
	responses: {
		200: {
			content: {
				'text/plain': {
					schema: z.string()
				}
			},
			description: 'A message generated with nZ'
		}
	}
});
const rtGet_addi = createRoute({
	method: 'get',
	path: '/addi',
	request: {
		query: z.object({ numa: z.coerce.number().int() })
	},
	responses: {
		200: {
			content: {
				'application/json': {
					schema: z.object({ msg: z.string() })
				}
			},
			description: 'Some operations using nZ'
		}
	}
});
const rtGet_searchAll = createRoute({
	method: 'get',
	path: '/searchAll',
	request: {},
	responses: {
		200: {
			content: {
				'application/json': {
					schema: z.object({ list: z.array(z.string()) })
				}
			},
			description: 'The list of all persons'
		}
	}
});
const rtGet_search = createRoute({
	method: 'get',
	path: '/search',
	request: {
		query: z.object({ letters: z.string() })
	},
	responses: {
		200: {
			content: {
				'application/json': {
					schema: z.object({ list: z.array(z.string()) })
				}
			},
			description: 'The list of persons with names containing the letters'
		}
	}
});
const rtGet_perso = createRoute({
	method: 'get',
	path: '/perso',
	request: {
		query: z.object({ id: z.string() })
	},
	responses: {
		200: {
			content: {
				'application/json': {
					schema: z.object({ pers: zPerson })
				}
			},
			description: 'The person details'
		}
	}
});

export type { tPerson };
export {
	rtGet_root,
	rtGet_argy,
	rtGet_two,
	rtGet_addi,
	rtGet_searchAll,
	rtGet_search,
	rtGet_perso
};

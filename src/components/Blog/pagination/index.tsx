import Link from 'next/link';
import PropTypes from 'prop-types';
import {createPaginationLinks} from '../../../lib/pagination';
import Previous from './previous';
import Next from './next';
import { useRouter } from 'next/router';
import { ReactElement, JSXElementConstructor, ReactFragment, PromiseLikeOfReactNode } from 'react';

const Pagination = ( {pagesCount, postName}:any ) => {


	const router = useRouter()
    const { pageNo } = router.query
	const currentPageNo = parseInt( pageNo as string) || 1

	const paginationLinks = createPaginationLinks( currentPageNo, pagesCount );

    if ( ! pagesCount || ! postName ) {
		return null;
	}

	return (
		<div className="flex justify-center my-8">

			<Previous currentPageNo={currentPageNo} postName={postName}/>

			{paginationLinks.map( ( pageNo: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | PromiseLikeOfReactNode | null | undefined, index: any ) => {

				const paginationLink = `/${postName}/page/${pageNo}/`;

				return (
					'number' === typeof pageNo ? (
						<Link key={`id-${index}`} href={paginationLink} className={'border border-gray-300 px-3 py-2 transition duration-500 ease-in-out hover:bg-gray-500 hover:text-white'}>
								{pageNo}
						</Link>
					) : (
					// If its "..."
						<span key={`id-${index}`} className="px-3 py-2">{pageNo}</span>
					)
				);
			} )}
			<Next currentPageNo={currentPageNo} pagesCount={pagesCount} postName={postName}/>
		</div>
	);
};

Pagination.propTypes = {
	pagesCount: PropTypes.number,
	postName: PropTypes.string,
};

Pagination.defaultProps = {
	pagesCount: 0,
	postName: 'blog',
};

export default Pagination;

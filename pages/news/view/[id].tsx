import { useRouter } from 'next/router';
import React from 'react';
import { BoardView } from "components/board/View";
import { Fnews } from 'types/api';
import Page404 from 'pages/404';
import { useNewsDelete, useNewsFindById } from '../../../hook/useNews';

interface IProp {
    item: Fnews
}

export const NewsDetail: React.FC<IProp> = ({ item }) => {
    const router = useRouter();
    const { title, thumb, createdAt, contents, _id, subTitle } = item;

    const toDetail = () => {
        router.push(`/news/write/${_id}`)
    }
    const toList = () => {
        router.push(`/news#list`)
    }


    const { newsDelete } = useNewsDelete({
        onCompleted: ({ NewsDelete }) => {
            if (NewsDelete.ok) toList();
        }
    })

    const handleDelete = () => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            newsDelete({
                id: _id
            })
    }

    return <BoardView
        onList={toList}
        thumb={thumb}
        content={contents}
        writer={"관리자"}
        title={title}
        subTitle={subTitle || ""}
        onDelete={handleDelete}
        onEdit={toDetail}
        createAt={createdAt}
    />
};


export const NewsDetailWrap: React.FC<IProp> = () => {
    const { query } = useRouter()
    const id = query.id as string;
    const { news, loading } = useNewsFindById(id)

    if (loading) return null;
    if (!news) return <Page404 />;

    return <NewsDetail item={news} />
}

export default NewsDetailWrap;
import { useRouter } from "next/router";
import React, { useEffect } from 'react';
import { initStorage, Storage } from '../../../utils/Storage';
import { BoardWrite } from "components/board/Write";
import { isUnLoaded, IUseBoardData, useBoard } from "hook/useBoard";
import { omits } from "../../../utils/omit";
import { auth, compose } from "../../../utils/with";
import { ONLY_LOGINED } from "../../../types/const";
import { Fnews, NEWS_TYPE } from '../../../types/api';
import { useNewsCreate, useNewsDelete, useNewsUpdate } from "../../../hook/useNews";

const categoryOps = [{
    label: "여행이야기",
    _id: NEWS_TYPE.TRAVEL
},
{
    label: "뉴스보도",
    _id: NEWS_TYPE.MEDIA
},
{
    label: "문화이야기",
    _id: NEWS_TYPE.CULTURE
}]
interface IProp {
    news: Fnews
}

export const NewsWrite: React.FC<IProp> = ({ news }) => {
    const id = news._id
    const router = useRouter();
    const mode = id ? "create" : "edit";

    const goToView = (id: string) => {
        router.push(`/news/view/${id}`)
    }

    const { newsUpdate } = useNewsUpdate({
        awaitRefetchQueries: true,
        onCompleted: ({ NewsUpdate }) => {
            if (NewsUpdate.ok) {
                const id = NewsUpdate.data!._id;
                goToView(id)
            }
        },
    })

    const { newsCreate } = useNewsCreate({
        awaitRefetchQueries: true,
        onCompleted: ({ NewsCreate }) => {
            if (NewsCreate.ok) {
                const id = NewsCreate.data!._id;
                goToView(id)
            }
        },
    })

    const { newsDelete } = useNewsDelete({
        onCompleted: ({ NewsDelete }) => {
            if (NewsDelete.ok)
                router.push(`/news`)
        },
    })

    const boardHook = useBoard({
        ...news,
        categoryId: news?.type
    });

    const { boardData, loadKey, loadKeyAdd, setBoardData, validater: { validate } } = boardHook

    const handleUpdate = () => {
        if (!validate()) return;

        const params = {
            ...boardData,
            type: boardData.categoryId as NEWS_TYPE
        }

        newsUpdate({
            params: omits(params, ["categoryId", "files"]),
            id
        })
    }

    const handleDelete = () => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            newsDelete({
                id
            })
    }

    const handleCreate = () => {
        if (!validate()) return;

        const createParams = {
            ...boardData,
            content: boardData.contents,
            type: boardData.categoryId as NEWS_TYPE
        }

        const next = omits(createParams, ["contents", "categoryId"])

        newsCreate({
            params: omits(next, ["categoryId", "files"])
        })
    }

    const handleTempSave = () => {
        Storage?.saveLocal("newsWrite", boardData);
    }

    const handleCancel = () => {
        router.push("/news")
    }

    const handleLoad = () => {
        const saveData = Storage?.getLocalObj<IUseBoardData>("newsWrite");
        if (!isUnLoaded(saveData)) {
            setBoardData(saveData);
            loadKeyAdd();
        }
    }

    useEffect(() => {
        initStorage()
    }, [])

    return <BoardWrite
        boardHook={boardHook}
        key={loadKey}
        mode={mode}
        onCancel={handleCancel}
        categoryList={categoryOps}
        onCreate={handleCreate}
        onDelete={handleDelete}
        onEdit={handleUpdate}
        onSave={handleTempSave}
        onLoad={handleLoad}
        opens={{
            category: true,
            summary: true,
            thumb: true,
            title: true
        }}
    />
};


export default auth(ONLY_LOGINED)(NewsWrite)
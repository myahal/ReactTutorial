const notesRouter = require('express').Router()

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2019-05-30T17:30:31.098Z",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only Javascript",
        date: "2019-05-30T18:39:34.091Z",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2019-05-30T19:20:14.298Z",
        important: true
    }
]


notesRouter.get('/', (req, res) => {
    res.json(notes)
})

notesRouter.get('/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
        // 該当するノートがなければundefined
    if (note) { 
        response.json(note)
    } else {
        response.status(404).end()  // not found(404) + end()でデータを返さずに返信する　
    }
})

// 該当するレコードがない場合は204か404を返す。今回は204
notesRouter.delete('/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)

    response.status(204).end()  // 204 no content
})

const generateId = () => {
    const maxId = notes.length > 0
        ? Math.max(...notes.map(n => n.id))
        : 0
    return maxId + 1
}

// request bodyにJSONで情報を送る -> データにアクセスするためにbody-parserを使う
notesRouter.post('/', (request, response) => {
    const body = request.body   // body parserを使うとbodyプロパティに値が入る（使わない場合はundefined)

    if (!body.content) {
        // ここでreturnしないと、不正なデータが保存されてしまう
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const note = {
        content: body.content,
        important: body.important || false,
        date: new Date(),   // 日時情報はサーバ側で作った方がいい
        id: generateId(),
    }

    notes = notes.concat(note)

    response.json(note)
})

module.exports = notesRouter

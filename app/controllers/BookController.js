const {Book} = require('../../models');

module.exports = {
	index(req, res) {
		Book.findAll({})
		.then(books => res.json({
		error: false,
		data:books
	}))
	.catch(error => res.json({
		error:true,
		data: [],
		error:error
	}));
	},
	create(req, res) {
        const {Title, Author, Genre, Review, Favorite } = req.body;
        Book.create({
            Title, Author, Genre, Review, Favorite
        })
        .then(user => res.status(201).json({
            error: false,
            data: user,
            message: "new eBook has been created"
        }))
        .catch(error => res.json({
            error:true,
            data: [],
            error: error
        }));
    },

    update(req, res) {
        const book_id = req.params.id;

        const { Title, Author, Genre, Review, Favorite} = req.body;

        Book.update({
            Title, Author, Genre, Review, Favorite
        }, {
            where: {
                id: book_id
            }
        })
        .then(book => res.status(201).json({
            error: false,
            data: book,
            message: 'eBook has been updated'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
    },

    destroy(req, res) {
        const book_id = req.params.id;

        Book.destroy({ where: {
            id: book_id
        }})
        .then(status => res.status(201).json({
            error: false,
            message: 'eBook has been deleted'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
    }
}

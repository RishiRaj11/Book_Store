const Book = require("../model/Book");

const getAllBooks = async (req, res, next) => {
    let books;
    try {
        books = await Book.find();
    } catch (error) {
        console.log(error);
    }
    if (!books) {
        return res.status(400).json({ message: "No Product found" })
    }
    return res.status(200).json({ books: books })
}

const addBook = async (req, res) => {
    const { name, author, description, price, available, image } = req.body;
    let book;
    try {
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image


        })
        await book.save();
    } catch (error) {
        console.log(error);
    }
    if (!book) {
        return res.status(500).json({ message: "Unable to add" });
    }
    return res.status(201).json({ book });
}

const getById = async (req, res) => {
    const { id } = req.params;
    let book;
    try {
        book = await Book.findById(id);

    } catch (error) {
        console.log(error);
    }
    if (!book) {
        return res.status(404).json({ message: "Not found book" });
    }

    return res.status(200).json({ book });
}
const updateBook = async (req, res) => {
    const { id } = req.params;
    const { name, author, description, price, available, image } = req.body;
    let book;
    try {
        book = await Book.findByIdAndUpdate(id, {
            name,
            author,
            description,
            price,
            available,
            image
        });
        book = await book.save();
    } catch (error) {
        console.log(error);
    }

    if (!book) {
        return res.status(404).json({ message: "Unable to update" });
    }

    return res.status(200).json({ book });
}

const deleteBook = async (req, res) => {
    const { id } = req.params;
    let book;
    try {
        book = await Book.findByIdAndRemove(id);
    } catch (error) {
        console.log(error);
    }

    if (!book) {
        return res.status(404).json({ message: "Unable to delete" });
    }

    return res.status(200).json({ message: "product successfully deleted" });
}

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
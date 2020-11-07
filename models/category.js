//nuevo modelo de categoria de proyecto
const categorySchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
    }
)

module.exports = mongoose.model('Category', categorySchema)
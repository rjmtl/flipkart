import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';

const AutoIncrement = AutoIncrementFactory(mongoose);

const productSchema = new mongoose.Schema({
    id: {type: Number, unique: true},
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

// productSchema.plugin(AutoIncrement, {inc_field: 'id'});

const products = mongoose.model('product', productSchema);

export default products;

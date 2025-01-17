import mongoose from 'mongoose';

const favoriteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Favorite || mongoose.model('Favorite', favoriteSchema);
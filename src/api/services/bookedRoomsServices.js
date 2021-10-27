const { BookedRoom } = require('../models');
const AppError = require('../../config/appError');

exports.bookRoom = async (roomID, userID, bookedDate, leaveDate) => {
  try {
    await BookedRoom.create({
      room_id: roomID,
      user_id: userID,
      booked_date: bookedDate,
      leave_date: leaveDate,
    });

    return {
      status: 'success',
      message: 'Room has been booked successfully',
    };
  } catch (err) {
    throw new AppError('Failed to book a room', 500);
  }
};

exports.cancelBooking = async (bookingID) => {
  try {
    await BookedRoom.destroy({
      where: {
        id: bookingID,
      },
    });

    return {
      status: 'success',
      message: 'Booking has been cancelled successfully',
    };
  } catch (err) {
    throw new AppError('Failed to book a room', 500);
  }
};

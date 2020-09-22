import React from "react";
import Button from "./shared/Button";

const BookingSlots = ({
  heading,
  decrementHandler,
  incrementHandler,
  adultsCount,
  roomCount,
  childrenCount,
  icon,
}) => {
  return (
    <div className="d-flex justify-content-between">
      <h4 className="font-weight-light text-primary">
        <i className={icon}> </i> {heading}
      </h4>
      <div>
        <Button
          icon="fa fa-minus"
          type="button"
          className="bg-primary"
          buttonValuehandler={decrementHandler}
          disabled={roomCount <= 1 || childrenCount <= 0 || adultsCount <= 1}
        />

        {adultsCount && <span className="pl-2 pr-2">{adultsCount}</span>}
        {roomCount && <span className="pl-2 pr-2">{roomCount}</span>}
        {childrenCount && <span className="pl-2 pr-2">{childrenCount}</span>}

        <Button
          icon="fa fa-plus"
          type="button"
          className="bg-danger"
          buttonValuehandler={incrementHandler}
          disabled={roomCount >= 5}
        />
      </div>
    </div>
  );
};

export default BookingSlots;

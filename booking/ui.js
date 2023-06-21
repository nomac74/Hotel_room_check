document.addEventListener('DOMContentLoaded', function() {
    
    let currentFloor = null;
    let row = null;

    Object.keys(rooms).forEach(room => {
        let floor = Math.floor(room / 100);

        if (floor !== currentFloor) {
            row = document.createElement('div');
            row.className = 'row';
            document.getElementById('container').appendChild(row);
            currentFloor = floor;
        }

        let col = document.createElement('div');
        col.className = 'col-1';

        let roomCard = `
            <div class="card mt-0">
                <div class="card-header" id="room${room}">
                    Room ${room}<br>
                <span>open</span> <div style="background-color: green; height: 10px; width: 10px; border-radius: 50%; display: inline-block;"></div>
                </div>
                <div class="card-body">
                    <form id="bookingForm${room}" style="display: none;">
                        <div class="form-group">
                            <label for="Name${room}">Name</label>
                            <input type="text" id="Name${room}" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="Phone${room}">Number</label>
                            <input type="text" id="Phone${room}" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="roomType${room}">Room Type</label>
                            <input type="text" id="roomType${room}" class="form-control" readonly>
                        </div>
                        <div class="form-group">
                            <label for="roomPrice${room}">Room Price</label>
                            <input type="text" id="roomPrice${room}" class="form-control" readonly>
                        </div>
                        <div class="form-group">
                            <label for="checkin${room}">Check In</label>
                            <input type="date" id="checkin${room}" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="checkout${room}">Check Out</label>
                            <input type="date" id="checkout${room}" class="form-control">
                        </div>
                        <button type="submit" class="btn btn-primary">Book</button>
                    </form>
                    <button id="cancelBtn${room}" style="display: none;" class="btn btn-danger mt-3">Cancel</button>
                </div>
            </div>`;

        col.innerHTML = roomCard;
        row.appendChild(col);

        document.getElementById('container').appendChild(row);
    });
});

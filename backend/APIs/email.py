from flask import current_app as app, request, jsonify
from flask_mail import Mail, Message
from datetime import datetime

mail = Mail(app)

# SECURITY NOTE: Ideally, store this in a .env file and use os.getenv('OWNER_EMAIL')
OWNER_EMAIL = "afzal.22it1602@gmail.com"

# --- CONTACT FORM HTML ---
def create_email_html(data):
    return f"""
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{ font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }}
            .container {{ max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }}
            .header {{ background-color: #2E8B57; padding: 30px 20px; text-align: center; color: white; }}
            .header h1 {{ margin: 0; font-size: 24px; font-weight: 300; letter-spacing: 1px; }}
            .content {{ padding: 30px; color: #333333; line-height: 1.6; }}
            .info-box {{ background-color: #f9f9f9; border-left: 4px solid #2E8B57; padding: 15px; margin: 20px 0; }}
            .field-row {{ margin-bottom: 10px; }}
            .label {{ font-weight: bold; color: #555; display: inline-block; width: 100px; }}
            .message-box {{ background-color: #fff; border: 1px solid #eee; padding: 15px; border-radius: 4px; margin-top: 10px; font-style: italic; color: #555; }}
            .footer {{ background-color: #333; color: #aaa; text-align: center; padding: 15px; font-size: 12px; }}
            .btn {{ display: inline-block; background-color: #2E8B57; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-weight: bold; margin-top: 20px; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🏡 New Homestay Inquiry</h1>
            </div>
            <div class="content">
                <p>Hello Owner,</p>
                <p>You have received a new message from your website's contact form. Here are the details:</p>
                
                <div class="info-box">
                    <div class="field-row"><span class="label">Name:</span> {data.get('name')}</div>
                    <div class="field-row"><span class="label">Email:</span> <a href="mailto:{data.get('email')}" style="color: #2E8B57;">{data.get('email')}</a></div>
                    <div class="field-row"><span class="label">Phone:</span> {data.get('phone')}</div>
                    <div class="field-row"><span class="label">Subject:</span> {data.get('subject')}</div>
                </div>

                <p><strong>Message:</strong></p>
                <div class="message-box">
                    "{data.get('message')}"
                </div>
                
                <div style="text-align: center;">
                    <a href="mailto:{data.get('email')}" class="btn">Reply to Guest</a>
                </div>
            </div>
            <div class="footer">
                &copy; 2026 Sikkim Homestay Website System
            </div>
        </div>
    </body>
    </html>
    """

# --- BOOKING EMAIL HTML ---
def create_booking_html(data):
    # Retrieve hotel name sent from frontend, fallback if missing
    HomestayName = data.get('homestayName', 'Unspecified Homestay')

    return f"""
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{ font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }}
            .container {{ max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }}
            .header {{ background-color: #007bff; padding: 30px 20px; text-align: center; color: white; }}
            .header h1 {{ margin: 0; font-size: 24px; font-weight: 300; letter-spacing: 1px; }}
            .content {{ padding: 30px; color: #333333; line-height: 1.6; }}
            .booking-summary {{ background-color: #e3f2fd; border-left: 4px solid #007bff; padding: 15px; margin: 20px 0; }}
            .field-row {{ margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 5px; }}
            .field-row:last-child {{ border-bottom: none; }}
            .label {{ font-weight: bold; color: #555; display: inline-block; width: 140px; }}
            .highlight {{ color: #007bff; font-weight: bold; }}
            .footer {{ background-color: #333; color: #aaa; text-align: center; padding: 15px; font-size: 12px; }}
            .btn {{ display: inline-block; background-color: #007bff; color: white; padding: 12px 25px; text-decoration: none; border-radius: 4px; font-weight: bold; margin-top: 20px; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>📅 New Booking Request</h1>
            </div>
            <div class="content">
                <p>Hello Owner,</p>
                <p>You have received a new booking request for <span class="highlight">{HomestayName}</span>.</p>
                <p>Please check availability and confirm with the guest.</p>
                
                <div class="booking-summary">
                    <div class="field-row"><span class="label">Property:</span> <strong>{HomestayName}</strong></div>
                    <div class="field-row"><span class="label">Guest Name:</span> {data.get('name')}</div>
                    <div class="field-row"><span class="label">Phone:</span> {data.get('phone')}</div>
                    <div class="field-row"><span class="label">Email:</span> <a href="mailto:{data.get('email')}">{data.get('email')}</a></div>
                    
                    <div class="field-row"><span class="label">Check-in:</span> {data.get('checkIn')}</div>
                    <div class="field-row"><span class="label">Check-out:</span> {data.get('checkOut')}</div>
                    <div class="field-row"><span class="label">Guests:</span> {data.get('guests')} Person(s)</div>
                </div>

                <p><strong>Special Requests:</strong></p>
                <p><em>"{data.get('specialRequests') if data.get('specialRequests') else 'None'}"</em></p>
                
                <div style="text-align: center;">
                    <a href="mailto:{data.get('email')}?subject=Booking Confirmation for {HomestayName}" class="btn">Reply to Confirm</a>
                </div>
            </div>
            <div class="footer">
                &copy; 2026 Sikkim Homestay Website System
            </div>
        </div>
    </body>
    </html>
    """


def create_booking_html_room(data):
    # Format the room type for display (e.g., 'deluxe' -> 'Deluxe Room')
    room_type_map = {
        'deluxe': '🏔️ Mountain View Deluxe',
        'family': '👨‍👩‍👧‍👦 Family Suite',
        'cottage': '🏡 Traditional Cottage',
        'Budget': '💰 Budget Room'
    }
    raw_room = data.get('room_type', '')
    display_room = room_type_map.get(raw_room, raw_room.title())

    return f"""
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{ font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }}
            .container {{ max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }}
            .header {{ background-color: #1a3f81; padding: 30px 20px; text-align: center; color: white; }}
            .header h1 {{ margin: 0; font-size: 24px; letter-spacing: 1px; }}
            .content {{ padding: 30px; color: #333; line-height: 1.6; }}
            .summary-box {{ background-color: #eef2f6; border-left: 4px solid #1a3f81; padding: 20px; margin: 20px 0; border-radius: 4px; }}
            .field-row {{ margin-bottom: 12px; border-bottom: 1px solid #e0e0e0; padding-bottom: 8px; }}
            .field-row:last-child {{ border-bottom: none; margin-bottom: 0; }}
            .label {{ font-weight: bold; color: #555; display: inline-block; width: 140px; }}
            .highlight {{ color: #1a3f81; font-weight: bold; }}
            .btn {{ display: inline-block; background-color: #ff6b35; color: white; padding: 12px 25px; text-decoration: none; border-radius: 4px; font-weight: bold; margin-top: 20px; }}
            .footer {{ background-color: #333; color: #aaa; text-align: center; padding: 15px; font-size: 12px; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>📅 New Website Inquiry</h1>
            </div>
            <div class="content">
                <p>Hello Owner,</p>
                <p>You have received a new booking inquiry from the <strong>Home Page</strong>.</p>
                
                <div class="summary-box">
                    <div class="field-row"><span class="label">Guest Name:</span> <strong>{data.get('name')}</strong></div>
                    <div class="field-row"><span class="label">Phone:</span> {data.get('phone')}</div>
                    <div class="field-row"><span class="label">Email:</span> <a href="mailto:{data.get('email')}">{data.get('email')}</a></div>
                    
                    <div class="field-row" style="margin-top: 15px;">
                        <span class="label">Room Interest:</span> 
                        <span class="highlight">{display_room}</span>
                    </div>
                    <div class="field-row"><span class="label">Guests:</span> {data.get('guests')} Person(s)</div>
                    <div class="field-row"><span class="label">Check-in:</span> {data.get('checkIn')}</div>
                    <div class="field-row"><span class="label">Check-out:</span> {data.get('checkOut')}</div>
                </div>

                <div style="text-align: center;">
                    <a href="mailto:{data.get('email')}?subject=Re: Inquiry for {display_room}" class="btn">Reply to Guest</a>
                </div>
            </div>
            <div class="footer">
                &copy; 2026 Sikkim Homestay System
            </div>
        </div>
    </body>
    </html>
    """

# --- ROUTES ---

@app.route('/contact', methods=['POST'])
def contact():
    try:
        data = request.json
        
        # 1. Basic Validation
        if not data or not data.get('email') or not data.get('message'):
            return jsonify({'message': 'Missing required fields'}), 400

        # 2. Prepare the email
        msg = Message(
            subject=f"New Inquiry: {data.get('subject')} - {data.get('name')}",
            recipients=[OWNER_EMAIL],
            html=create_email_html(data),
            sender=OWNER_EMAIL 
        )
        
        # 3. Send the email
        mail.send(msg)

        return jsonify({'message': 'Email sent successfully!'}), 200

    except Exception as e:
        print(f"Error sending email: {e}")
        return jsonify({'message': 'Internal server error'}), 500
    

@app.route('/booking', methods=['POST'])
def booking():
    try:
        data = request.json
        
        required_fields = ['name', 'email', 'phone', 'checkIn', 'checkOut', 'guests']
        
        for field in required_fields:
            if not data.get(field):
                return jsonify({'message': f'Missing field: {field}'}), 400

        # Optional: Basic Date Logic Validation
        try:
            check_in = datetime.strptime(data.get('checkIn'), '%Y-%m-%d')
            check_out = datetime.strptime(data.get('checkOut'), '%Y-%m-%d')
            if check_out <= check_in:
                return jsonify({'message': 'Check-out date must be after Check-in date'}), 400
        except ValueError:
            pass # Skip validation if date format is weird, rely on string in email

        # 2. Prepare Email
        homeStayName = data.get('homestayName', 'Unspecified Homestay')
        
        msg = Message(
            subject=f"Booking Request: {homeStayName} - {data.get('name')}",
            recipients=[OWNER_EMAIL],
            html=create_booking_html(data),
            sender=OWNER_EMAIL 
        )
        
        # 3. Send
        mail.send(msg)

        return jsonify({'message': 'Booking request sent successfully!'}), 200

    except Exception as e:
        print(f"Error sending booking email: {e}")
        return jsonify({'message': 'Internal server error'}), 500
    


@app.route('/booking/room', methods=['POST'])
def booking_room():
    try:
        data = request.json
        print("Received Booking Data:", data)  # Debugging log

        # 1. Validation
        required_fields = ['name', 'email', 'phone', 'checkIn', 'checkOut', 'guests', 'room_type']
        missing_fields = [field for field in required_fields if not data.get(field)]

        if missing_fields:
            return jsonify({'message': f'Missing required fields: {", ".join(missing_fields)}'}), 400

        # 2. Date Logic Check (Optional)
        try:
            check_in = datetime.strptime(data['checkIn'], '%Y-%m-%d')
            check_out = datetime.strptime(data['checkOut'], '%Y-%m-%d')
            if check_out <= check_in:
                return jsonify({'message': 'Check-out date must be after Check-in date'}), 400
        except ValueError:
            pass # Use string dates if parsing fails

        # 3. Create Message
        # We use the room type in the subject line for quick glancability
        msg = Message(
            subject=f"Inquiry: {data.get('name')} - {data.get('room_type').title()}",
            recipients=[OWNER_EMAIL],
            html=create_booking_html_room(data),
            sender = OWNER_EMAIL
        )

        # 4. Send
        mail.send(msg)

        return jsonify({'message': 'Booking inquiry sent successfully!'}), 200

    except Exception as e:
        print(f"Server Error: {e}")
        return jsonify({'message': 'Internal Server Error'}), 500   
    


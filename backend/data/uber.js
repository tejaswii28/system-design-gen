module.exports = `
SYSTEM: Uber

FUNCTIONAL REQUIREMENTS
- Request ride
- Accept ride
- Track driver
- Make payment

NON FUNCTIONAL REQUIREMENTS
- High availability
- Low latency
- Scalability

DATABASE
Users
Drivers
Rides
Payments

API DESIGN
POST /ride/request
GET /ride/:id
POST /payment
`;
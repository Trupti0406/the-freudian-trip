// import { Resend } from "resend";
// import { NextResponse } from "next/server";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const { name, email, organisation, details } = body;

//     const data = await resend.emails.send({
//       from: "The Freudian Trip <onboarding@resend.dev>",
//       to: "trupti.yadav@gmail.com",
//       subject: `New Workshop Enquiry — ${name}`,
//       html: `
//         <h2>New Workshop Enquiry</h2>

//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Organisation:</strong> ${organisation}</p>
//         <h3>Additional details</h3>
//         <p>${details}</p>
//       `,
//     });

//     console.log("Resend response:", data);

//     return NextResponse.json({
//       success: true,
//       data,
//     });
//   } catch (error) {
//     console.error("Email error:", error);

//     return NextResponse.json(
//       {
//         error: "Failed to send email",
//       },
//       { status: 500 },
//     );
//   }
// }

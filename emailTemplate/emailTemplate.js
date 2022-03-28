module.exports = {
  // 1. accountVerificationEmailTemplate
  accountVerificationEmailTemplate: `
       Hi,
            <p>Thank you for creating an account with Digno.</p>
            <p>
            Your email address is not yet verified. To Launch Digno , please click this link to verify your email
            <a href = {{url}}>Click Here</a></p>
            <p>
            If you have further questions, please do not hesitate to ask:)
            </p>
            <p>
            All the best</p>
       `, // 1. resetPasswordEmailTemplate
  resetPasswordEmailTemplate: `
         Hi,
              <p>Forget Pass Key.</p>
              <p>
              To Reset your Password,  Please click this link to create new password 
              <a href = {{url}}>Click Here</a></p>
              <p>
              If you have further questions, please do not hesitate to ask:)
              </p>
              <p>
              All the best</p>
         `,
  newCompanyInvitationEmailTemplate: `Hi,
         <p>Thank you for creating an account with Digno.</p>

         <p>
           email :  {{email}}
         <p>

         <p>
         password :  {{password}}
         <p>

         <p>
         Your email address is not yet verified. To Launch Digno , please click this link to verify your email
         <a href = {{url}}>Click Here</a></p>
         <p>
         If you have further questions, please do not hesitate to ask:)
         </p>
         <p>
         All the best</p>
         `,
  inviteUserViaEmailTemplate: `<div>
        Hi,
        <p>
            You have been invited by <b>Netrust</b>.
            Please find your account credentials attached herewith.
        </p>

        <br />
        <p><b>Email:</b> {{email}}</p>
        <p><b>Password:</b> {{password}}</p>
        <br />

        <p>
            Your email address is not yet verified. To Launch Netrust, please click on
            <b><a href="{{url}}">this link</a></b> to verify your email.
        </p>

        <p>If you have any further questions, please do not hesitate to ask :)</p>
        <p>We welcome you onboard and wish you all the best.</p>
    </div>`,
};

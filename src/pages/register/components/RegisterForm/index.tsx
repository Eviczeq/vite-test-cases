// import { useCallback, useState } from "react";
// import { TextInput } from "../../../../components/TextInput";
// import Button from "../../../../components/Button";
// import Checkbox from "../../../../components/Checkbox";
// import axios from "axios";

// export const RegisterForm = () => {
//   const [userName, setUserName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [checked, setChecked] = useState<boolean>(false);
//   // const onSubmit = () => {
//   //   console.log("submited");
//   // };
//   const onSubmit = useCallback(async () => {
//     const params = {
//       userName,
//       email,
//     };
//     try {
//       const res = await axios.post("/user", params);
//       console.log(res);
//     } catch (error) {
//       console.log(error);
//     }
//   }, [email, userName]);
//   return (
//     <form role="form" action="">
//       <TextInput
//         name={"userName"}
//         onChange={setUserName}
//         placeholder="type username"
//         value={userName}
//       />
//       <TextInput
//         name="email"
//         onChange={setEmail}
//         placeholder="type email"
//         value={email}
//       />
//       <Checkbox
//         label="Approve for privacy"
//         checked={checked}
//         onChange={setChecked}
//       />
//       <Button label="登録する" onClick={onSubmit} disabled={!checked} />
//     </form>
//   );
// };

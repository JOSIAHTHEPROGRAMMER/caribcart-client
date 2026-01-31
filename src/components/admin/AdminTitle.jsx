const AdminTitle = ({ text1, text2 }) => {
  return (
    <h1 className="font-semibold text-2xl text-gray-800">
      {text1}{" "}
      <span className="decoration-sky-500 decoration-2 underline underline-offset-4 text-sky-600">
        {text2}
      </span>
    </h1>
  );
};

export default AdminTitle;

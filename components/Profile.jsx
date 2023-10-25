import PromptCard from "./PromptCard";

function Profile({ name, desc, data, handleEdit, handleDelete, noItem }) {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
        <p className="desc text-left">{desc}</p>
      </h1>
      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
      {noItem === "true" ? (
        <div className="flex justify-center items-center">
          <span className="text-xl font-semibold text-gray-500">
            You don't have any posts on your profile
          </span>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default Profile;

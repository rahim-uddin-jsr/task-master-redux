import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/feature/taskManagerSlice/taskManagerSlice";
import Modal from "../Modal/Modal";
const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(addTask(data));
    reset();
    setIsOpen(false);
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={`Add Task`}>
      <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3 mt-3">
          <label htmlFor="title">Title</label>
          <input
            className="rounded-md"
            type="text"
            id="title"
            {...register("name")}
          />
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <label htmlFor="description">Description</label>
          <textarea
            className="rounded-md"
            name=""
            id="description"
            cols="30"
            rows="3"
            {...register("description")}
          ></textarea>
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <label htmlFor="deadline">Deadline</label>
          <input
            className="rounded-md"
            type="date"
            id="deadline"
            {...register("deadline")}
          />
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <label htmlFor="assign">Assign to</label>
          <input
            className="rounded-md"
            type="text"
            id="assign"
            {...register("assignTo")}
          />
        </div>
        <div className="flex flex-col gap-3 mb-5 mt-3">
          <label htmlFor="priority">Priority</label>
          <input
            className="rounded-md"
            type="text"
            id="priority"
            {...register("priority")}
          />
        </div>
        <button className="px-5 cursor-pointer py-2 rounded-lg bg-red-500 text-white font-semibold shadow-md">
          cancel
        </button>
        <input
          className="px-5 cursor-pointer py-2 rounded-lg bg-green-400 ml-3 text-white font-semibold shadow-md"
          type="submit"
          value={`submit`}
        />
      </form>
    </Modal>
  );
};

export default AddTaskModal;

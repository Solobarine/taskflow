import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import taskAsyncThunk from "../thunks/taskThunk";

const { getTasks, createTask, updateTask, deleteTask } = taskAsyncThunk;

interface TaskInterface {
  task: any;
  tasks: {
    loadingState: "idle" | "pending" | "failed";
    errorCode: string | undefined;
    data: [any] | [];
  };
  create: {
    loadingState: "idle" | "pending" | "failed";
    errorCode: string | undefined;
    data: [any] | [];
  };
  update: {
    loadingState: "idle" | "pending" | "failed";
    errorCode: string | undefined;
    data: { message: string };
  };
  delete: {
    loadingState: "idle" | "pending" | "failed";
    errorCode: string | undefined;
    data: { message: string };
  };
}

const initialState: TaskInterface = {
  task: {},
  tasks: {
    loadingState: "idle",
    errorCode: undefined,
    data: [],
  },
  create: {
    loadingState: "idle",
    errorCode: undefined,
    data: [],
  },
  update: {
    loadingState: "idle",
    errorCode: undefined,
    data: { message: "" },
  },
  delete: {
    loadingState: "idle",
    errorCode: undefined,
    data: { message: "" },
  },
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    selectTask: (state, action) => {
      state.task = action.payload;
    },
    taskUpdate: (state, { payload }) => {
      state.tasks.data.forEach((task) =>
        task._id === payload._id
          ? { ...task, title: payload.title, description: payload.description }
          : task
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTasks.pending, (state) => {
      state.tasks.loadingState = "pending";
      state.tasks.errorCode = undefined;
    });
    builder.addCase(
      getTasks.fulfilled,
      (state, action: PayloadAction<{ data: { tasks: any } }>) => {
        state.tasks.loadingState = "idle";
        state.tasks.data = action.payload.data.tasks;
      }
    );
    builder.addCase(getTasks.rejected, (state, action) => {
      state.tasks.loadingState = "failed";
      state.tasks.errorCode = action.error.code;
    });
    builder.addCase(createTask.pending, (state) => {
      state.create.loadingState = "pending";
      state.create.errorCode = undefined;
    });
    builder.addCase(
      createTask.fulfilled,
      (state, action: PayloadAction<{ data: { task: any } }>) => {
        state.create.loadingState = "idle";
        state.create.data = action.payload.data.task;
        state.tasks.data = [...state.tasks.data, action.payload.data.task] as [
          any
        ];
      }
    );
    builder.addCase(createTask.rejected, (state, action) => {
      state.create.loadingState = "failed";
      state.create.errorCode = action.error.code;
    });
    builder.addCase(updateTask.pending, (state) => {
      state.update.loadingState = "pending";
      state.update.errorCode = undefined;
    });
    builder.addCase(
      updateTask.fulfilled,
      (
        state,
        action: PayloadAction<{
          data: {
            message: string;
            task: { _id: string; title: string; description: string };
          };
        }>
      ) => {
        state.update.loadingState = "idle";
        state.update.data = action.payload.data;
        state.tasks.data = state.tasks.data.map((task) =>
          task._id == action.payload.data.task._id
            ? {
                ...task,
                title: action.payload.data.task.title,
                description: action.payload.data.task.description,
              }
            : task
        ) as [any];
      }
    );
    builder.addCase(updateTask.rejected, (state, action) => {
      state.update.loadingState = "failed";
      state.update.errorCode = action.error.code;
    });
    builder.addCase(deleteTask.pending, (state) => {
      state.delete.loadingState = "pending";
      state.delete.errorCode = undefined;
    });
    builder.addCase(
      deleteTask.fulfilled,
      (
        state,
        action: PayloadAction<{ data: { message: string; _id: string } }>
      ) => {
        state.delete.loadingState = "idle";
        state.delete.data = action.payload.data;
        state.tasks.data = state.tasks.data.filter(
          (task) => task._id !== action.payload.data._id
        ) as [any];
      }
    );
    builder.addCase(deleteTask.rejected, (state, action) => {
      state.delete.loadingState = "failed";
      state.delete.errorCode = action.error.code;
    });
  },
});

export const { selectTask, taskUpdate } = taskSlice.actions;
export default taskSlice.reducer;

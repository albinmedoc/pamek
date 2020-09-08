<script>
    import {
        Form,
        FormRow,
        InputContainer,
        autoresize,
    } from 'svelte-responsive-form';
</script>

<style>
    div :global(form) {
        width: auto;
        padding: 25px 35px;
        background-color: #e3e3e3;
        max-width: 300px;
    }
</style>

<div>
    <Form>
        <FormRow>
            <InputContainer label="Ditt namn">
                <input type="text" placeholder=" " required />
            </InputContainer>
        </FormRow>
        <FormRow>
            <InputContainer label="Din e-post">
                <input type="email" placeholder=" " required />
            </InputContainer>
        </FormRow>
        <FormRow>
            <InputContainer label="Ditt telefonnummer">
                <input type="tel" placeholder=" " required />
            </InputContainer>
        </FormRow>
        <FormRow>
            <InputContainer label="Ämne">
                <input type="text" placeholder=" " required />
            </InputContainer>
        </FormRow>
        <FormRow>
            <InputContainer label="Meddelande">
                <textarea use:autoresize placeholder=" " required />
            </InputContainer>
        </FormRow>
        <FormRow>
            <InputContainer>
                <input type="submit" value="Skicka">
            </InputContainer>
        </FormRow>
    </Form>
</div>
